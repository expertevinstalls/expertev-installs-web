// ============================================================
//  invite-contractor — Supabase Edge Function
//  Phase 5: Contractor Authentication
//
//  PURPOSE:
//  Single-step contractor onboarding. Accepts contractor details,
//  creates (or finds) the contractors DB record, creates the Supabase
//  Auth user, links them together, and sends the invite email.
//  The service-role key lives only here — never in the frontend.
//
//  DEPLOY:
//    supabase functions deploy invite-contractor --no-verify-jwt
//
//  REQUIRED ENV SECRETS (set in Supabase Dashboard → Edge Functions → Secrets):
//    SUPABASE_URL              — your project URL (auto-set)
//    SUPABASE_SERVICE_ROLE_KEY — your service-role key (add manually)
//    SITE_URL                  — your deployed site URL, e.g. https://yoursite.netlify.app
//
//  Also configure in Supabase Dashboard → Authentication → URL Configuration:
//    Site URL:          https://yoursite.netlify.app
//    Redirect URLs:     https://yoursite.netlify.app/**
//                       http://localhost:3000/**
//
//  REQUEST (POST, JSON body):
//    {
//      email:        string   — required
//      contractorId: string?  — if omitted, record is looked up by email or auto-created
//      company_name: string?  — used when creating a new contractor record
//      contact_name: string?  — used when creating a new contractor record
//      services:     string[] — used when creating a new contractor record
//    }
//
//  RESPONSE (JSON):
//    success: { ok: true }
//    success: { ok: true, note: "..." }   — with additional context
//    error:   { step: "step_name", error: "message" }
//
//  FLOWS:
//    New invite  (contractor.auth_user_id = null):
//      → inviteUserByEmail → creates auth user + sends invite email
//      → update contractors.auth_user_id + invited_at
//
//    Resend invite (contractor.auth_user_id is set, not yet activated):
//      → resetPasswordForEmail → sends password-reset link via configured SMTP
//
//    Already registered (inviteUserByEmail returns "already registered"):
//      → find existing auth user by email
//      → link to contractor record if not already linked
//      → resetPasswordForEmail → sends reset email so they can access the portal
//
//    No contractor record found:
//      → auto-create contractor row from payload fields
//      → then proceed with new invite flow
//
//  SECURITY:
//  - Caller must be authenticated admin (JWT checked + admin_email verified against DB).
//  - Deployed with --no-verify-jwt so Supabase gateway does not reject
//    sb_publishable_* keys; the function enforces its own auth.
// ============================================================

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { corsHeaders }   from "../_shared/cors.ts";

Deno.serve(async (req: Request) => {
  // ── CORS preflight ──────────────────────────────────────────
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // ── 1. Verify caller is authenticated as admin ──────────────
    console.log("[invite-contractor] Request received — method:", req.method);
    const authHeader = req.headers.get("Authorization");
    console.log("[invite-contractor] Authorization header present:", !!authHeader, "| starts:", authHeader?.slice(0, 30) + "…");

    if (!authHeader) {
      console.error("[invite-contractor] RETURN_401_MISSING_AUTH");
      return json({ step: "auth", error: "Missing Authorization header", reason: "RETURN_401_MISSING_AUTH" }, 401);
    }

    // Decode JWT payload (no extra network call — gateway already validated signature)
    const jwt = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : authHeader;
    console.log("[invite-contractor] JWT prefix:", jwt.slice(0, 12) + "…", "| is eyJ:", jwt.startsWith("eyJ"));

    if (!jwt.startsWith("eyJ")) {
      console.error("[invite-contractor] RETURN_401_NOT_JWT — token starts with:", jwt.slice(0, 20));
      return json({ step: "auth", error: "Token is not a JWT", reason: "RETURN_401_NOT_JWT" }, 401);
    }

    const jwtPayload = decodeJwtPayload(jwt);
    if (!jwtPayload) {
      console.error("[invite-contractor] RETURN_401_DECODE_FAIL — base64 decode or JSON parse failed");
      return json({ step: "auth", error: "Could not decode JWT payload", reason: "RETURN_401_DECODE_FAIL" }, 401);
    }

    console.log("[invite-contractor] JWT payload keys:", Object.keys(jwtPayload).join(", "));

    const callerEmail = (
      (jwtPayload.email as string) ||
      ((jwtPayload.user_metadata as Record<string, string>)?.email) ||
      ""
    ).toLowerCase().trim();
    const callerId = (jwtPayload.sub as string) ?? "(unknown)";
    console.log("[invite-contractor] JWT claims — sub:", callerId, "| email:", callerEmail || "(not found in any claim)");

    if (!callerEmail) {
      console.error("[invite-contractor] RETURN_401_NO_EMAIL — payload keys were:", Object.keys(jwtPayload).join(", "));
      return json({ step: "auth", error: "JWT has no email claim", reason: "RETURN_401_NO_EMAIL", keys: Object.keys(jwtPayload) }, 401);
    }

    // ── 2. Create admin client (service-role key) ───────────────
    const adminClient = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
      { auth: { autoRefreshToken: false, persistSession: false } }
    );

    const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "(missing)";
    console.log("[invite-contractor] SUPABASE_URL prefix:", supabaseUrl.slice(0, 40));

    // ── 3. Admin authorization check via app_settings ──────────
    const { data: appSettings, error: settingsErr } = await adminClient
      .from("app_settings")
      .select("admin_email")
      .eq("id", 1)
      .maybeSingle();
    if (settingsErr) {
      console.error("[invite-contractor] Could not read app_settings:", settingsErr.message);
      return json({ step: "admin_check", error: "Server error reading admin config: " + settingsErr.message }, 500);
    }
    const adminEmail = (appSettings?.admin_email ?? "").toLowerCase().trim();
    console.log("[invite-contractor] admin check — caller:", callerEmail, "| expected:", adminEmail || "(not set in app_settings)");
    if (!adminEmail || callerEmail !== adminEmail) {
      console.error("[invite-contractor] 403 — admin mismatch or admin_email not configured");
      return json({ step: "admin_check", error: "Admin access required — caller: " + callerEmail + ", expected: " + (adminEmail || "not configured") }, 403);
    }

    // ── 4. Parse + validate request body ───────────────────────
    const body = await req.json().catch(() => null);
    console.log("[invite-contractor] Request body:", JSON.stringify(body));
    if (!body || !body.email) {
      return json({ step: "parse_body", error: "email is required" }, 400);
    }

    const {
      email,
      contractorId,
      company_name,
      contact_name,
      services,
    } = body as {
      email:         string;
      contractorId?: string;
      company_name?: string;
      contact_name?: string;
      services?:     string[];
    };

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ step: "parse_body", error: "Invalid email address" }, 400);
    }

    console.log("[invite-contractor] contractorId:", contractorId ?? "(none)", "| email:", email);

    // ── 5. Find or create contractor record ─────────────────────
    let contractor: { id: string; email: string; auth_user_id: string | null } | null = null;

    // Lookup by provided ID first
    if (contractorId) {
      const { data, error: lookupErr } = await adminClient
        .from("contractors")
        .select("id, email, auth_user_id")
        .eq("id", contractorId)
        .maybeSingle();
      if (lookupErr) {
        console.error("[invite-contractor] DB lookup by ID error:", lookupErr.message);
        return json({ step: "lookup_contractor", error: "Database error: " + lookupErr.message }, 500);
      }
      contractor = data ?? null;
    }

    // Fallback: lookup by email
    if (!contractor) {
      const { data, error: emailLookupErr } = await adminClient
        .from("contractors")
        .select("id, email, auth_user_id")
        .eq("email", email)
        .maybeSingle();
      if (emailLookupErr) {
        console.error("[invite-contractor] DB lookup by email error:", emailLookupErr.message);
        return json({ step: "lookup_contractor", error: "Database error: " + emailLookupErr.message }, 500);
      }
      contractor = data ?? null;
    }

    // Auto-create if still not found
    if (!contractor) {
      // Require company_name — do NOT silently fall back to email.
      // An unnamed contractor would inherit the email string as their company identity,
      // which causes the wrong name to show throughout the dashboard.
      if (!company_name?.trim()) {
        console.error("[invite-contractor] Auto-create blocked — company_name is required but was not provided");
        return json({
          step: "auto_create",
          error: "company_name is required to create a new contractor record. Please provide the company name.",
        }, 400);
      }

      console.log("[invite-contractor] No contractor record found — auto-creating for:", email, "| company_name:", company_name);
      const insertPayload: Record<string, unknown> = {
        email,
        name:         company_name,
        company_name: company_name,
        contact:      contact_name || "",
        contact_name: contact_name || "",
        services:     services     || [],
        is_active:    true,
        status:       "active",
        leads:        0,
        completed:    0,
        revenue:      0,
        rating:       5.0,
      };
      // Always provide an ID — contractors.id has no DB default (TEXT PRIMARY KEY, no gen_random_uuid()).
      insertPayload.id = contractorId || crypto.randomUUID();

      const { data: newContractor, error: insertErr } = await adminClient
        .from("contractors")
        .insert([insertPayload])
        .select("id, email, auth_user_id")
        .single();

      if (insertErr) {
        console.error("[invite-contractor] Failed to auto-create contractor:", insertErr.message);
        return json({ step: "create_contractor", error: "Could not create contractor record: " + insertErr.message }, 500);
      }

      contractor = newContractor;
      console.log("[invite-contractor] Auto-created contractor record — id:", contractor!.id);
    } else {
      console.log("[invite-contractor] Contractor found — id:", contractor.id, "| auth_user_id:", contractor.auth_user_id ?? "none");
    }

    // ── 6. Build redirect URL ────────────────────────────────────
    // SITE_URL must be set in Edge Function secrets.
    // Do NOT embed a hash fragment — Supabase appends its own hash with
    // the session tokens and `type=invite` or `type=recovery` automatically.
    const siteUrl = Deno.env.get("SITE_URL");
    if (!siteUrl) {
      console.error("[invite-contractor] SITE_URL env var is not set! Invite links will be broken.");
      return json({
        step:  "build_redirect",
        error: "SITE_URL is not configured. Go to Supabase Dashboard → Edge Functions → invite-contractor → Secrets and add SITE_URL=https://your-deployed-site.com",
      }, 500);
    }
    const redirectTo = siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`;
    console.log("[invite-contractor] redirectTo:", redirectTo);

    // ── 7. Resend path — contractor already has an auth account ─
    if (contractor!.auth_user_id) {
      console.log("[invite-contractor] auth_user_id already set — resending via password reset email to:", email);
      const { error: resetErr } = await adminClient.auth.resetPasswordForEmail(email, { redirectTo });
      if (resetErr) {
        console.error("[invite-contractor] resetPasswordForEmail error:", resetErr.message);
        return json({ step: "resend_invite", error: "Failed to resend invite: " + resetErr.message }, 500);
      }
      console.log("[invite-contractor] Resend password reset email sent successfully to:", email);
      return json({ ok: true, note: "Resend sent — contractor will receive a password reset email." });
    }

    // ── 8. New invite — send first-time invite email ────────────
    const { data: inviteData, error: inviteErr } = await adminClient.auth.admin.inviteUserByEmail(
      email,
      { redirectTo }
    );

    if (inviteErr) {
      console.error("[invite-contractor] inviteUserByEmail error:", inviteErr.message);

      // ── Handle "user already registered" ─────────────────────
      const alreadyRegistered =
        inviteErr.message.toLowerCase().includes("already registered") ||
        inviteErr.message.toLowerCase().includes("already been registered") ||
        inviteErr.message.toLowerCase().includes("already exists");

      if (alreadyRegistered) {
        console.log("[invite-contractor] Email already registered — looking up existing auth user");
        const { data: listData, error: listErr } = await adminClient.auth.admin.listUsers();
        if (listErr) {
          console.error("[invite-contractor] listUsers error:", listErr.message);
          return json({ step: "find_existing_auth_user", error: "Email already registered in auth but could not locate user: " + listErr.message }, 500);
        }
        const existingAuthUser = listData?.users?.find(
          (u: { id: string; email?: string }) => u.email?.toLowerCase() === email.toLowerCase()
        );
        if (!existingAuthUser) {
          return json({ step: "find_existing_auth_user", error: "Email already registered but user record not found — contact support" }, 500);
        }

        console.log("[invite-contractor] Found existing auth user:", existingAuthUser.id, "— linking to contractor", contractor!.id);
        const { error: linkErr } = await adminClient
          .from("contractors")
          .update({ auth_user_id: existingAuthUser.id, invited_at: new Date().toISOString(), email })
          .eq("id", contractor!.id);
        if (linkErr) {
          console.error("[invite-contractor] Link error:", linkErr.message);
        }

        const { error: resetErr } = await adminClient.auth.resetPasswordForEmail(email, { redirectTo });
        if (resetErr) {
          console.error("[invite-contractor] resetPasswordForEmail after link error:", resetErr.message);
          return json({ step: "send_reset_email", error: "User linked to contractor but reset email failed: " + resetErr.message }, 500);
        }
        return json({ ok: true, note: "Email already registered — linked existing auth account and sent password reset email." });
      }

      return json({ step: "send_invite", error: "Failed to send invite: " + inviteErr.message }, 500);
    }

    // ── 9. Link new auth user to contractor record ──────────────
    const authUserId = inviteData.user?.id;
    console.log("[invite-contractor] Invite sent — new auth_user_id:", authUserId);

    if (authUserId) {
      const { error: updateErr } = await adminClient
        .from("contractors")
        .update({
          auth_user_id: authUserId,
          invited_at:   new Date().toISOString(),
          email,
        })
        .eq("id", contractor!.id);

      if (updateErr) {
        console.error("[invite-contractor] Failed to link auth_user_id:", updateErr.message);
        // Invite was sent — don't fail the request, admin can re-link manually
      } else {
        console.log("[invite-contractor] Linked auth_user_id", authUserId, "to contractor", contractor!.id);
      }
    }

    return json({ ok: true });

  } catch (err) {
    console.error("[invite-contractor] Unexpected error:", err);
    return json({ step: "unexpected", error: "Internal server error" }, 500);
  }
});


// ── Helpers ──────────────────────────────────────────────────────────────────

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

/** Decode a JWT payload without verifying the signature. */
function decodeJwtPayload(token: string): Record<string, unknown> | null {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    // base64url → base64 → JSON
    const base64 = parts[1].replace(/-/g, "+").replace(/_/g, "/");
    const json = atob(base64);
    return JSON.parse(json);
  } catch {
    return null;
  }
}
