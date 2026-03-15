// ============================================================
//  send-monthly-report  — Supabase Edge Function
//
//  Called by:
//    • The "Send Report" button in Settings (manual trigger)
//    • pg_cron on the 1st of each month (automatic trigger)
//
//  POST body (JSON):
//    period        string   — 'this-month' | 'last-month' | '90-days' | 'all'
//    periodLabel   string   — human-readable label, e.g. "February 2026"
//    recipient     string   — email address to send to
//    adminEmail    string   — admin email (used as Reply-To)
//    businessName  string
//    resendApiKey  string   — caller supplies the API key
//    stats: {
//      newLeads      number
//      completed     number
//      revenue       number
//      platformCut   number
//      commissionPct number
//    }
//    contractors: Array<{ name, leads, won, revenue }>
//
//  Environment variables (set in Supabase dashboard):
//    RESEND_FROM_EMAIL  — "from" address, e.g. "reports@yourdomain.com"
//                         (must be a verified Resend sender)
// ============================================================

import { serve }        from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: CORS_HEADERS });
  }

  try {
    const body = await req.json();
    let {
      period        = 'last-month',
      periodLabel,
      recipient,
      adminEmail,
      businessName  = 'ExpertEV Installers',
      resendApiKey,
      stats,
      contractors,
    } = body;

    if (!recipient)    return jsonError('Missing recipient', 400);
    if (!resendApiKey) return jsonError('Missing resendApiKey', 400);

    // ── If called from pg_cron (minimal payload), query DB for live data ──
    const needsDbData = !stats || (stats.newLeads === 0 && stats.completed === 0 && (!contractors || contractors.length === 0));
    if (needsDbData) {
      const supabaseUrl  = Deno.env.get('SUPABASE_URL')!;
      const serviceKey   = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
      if (supabaseUrl && serviceKey) {
        const sb = createClient(supabaseUrl, serviceKey);
        const dbData = await buildReportFromDb(sb, period);
        if (dbData) {
          stats       = dbData.stats;
          contractors = dbData.contractors;
          periodLabel = periodLabel || dbData.periodLabel;
        }
      }
    }

    stats       = stats       || { newLeads: 0, completed: 0, revenue: 0, platformCut: 0, commissionPct: 15 };
    contractors = contractors || [];

    const fromEmail = Deno.env.get('RESEND_FROM_EMAIL') || `reports@expertevinstallers.com`;

    const fmt   = (n: number) => `$${Number(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    const pct   = stats.commissionPct ?? 15;
    const label = periodLabel || period || 'Unknown Period';

    // ── Build HTML email ──────────────────────────────────────
    const contractorRows = contractors.length > 0
      ? contractors.map((c: { name: string; leads: number; won: number; revenue: number }) => `
          <tr>
            <td style="padding:10px 14px;border-bottom:1px solid #1e2535">${c.name}</td>
            <td style="padding:10px 14px;border-bottom:1px solid #1e2535;text-align:center">${c.leads}</td>
            <td style="padding:10px 14px;border-bottom:1px solid #1e2535;text-align:center">${c.won}</td>
            <td style="padding:10px 14px;border-bottom:1px solid #1e2535;text-align:right;color:#4ade80;font-weight:600">${fmt(c.revenue)}</td>
            <td style="padding:10px 14px;border-bottom:1px solid #1e2535;text-align:right;color:#94a3b8">${fmt(c.revenue * pct / 100)}</td>
          </tr>`).join('')
      : `<tr><td colspan="5" style="padding:14px;text-align:center;color:#64748b">No activity this period</td></tr>`;

    const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0b0f1a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#e2e8f0">
  <div style="max-width:640px;margin:0 auto;padding:32px 16px">

    <!-- Header -->
    <div style="text-align:center;margin-bottom:32px">
      <div style="display:inline-block;background:linear-gradient(135deg,#3b82f6,#06b6d4);padding:12px 24px;border-radius:12px;margin-bottom:16px">
        <span style="font-size:1.5rem;font-weight:800;color:#fff;letter-spacing:-0.03em">${businessName}</span>
      </div>
      <h1 style="margin:0;font-size:1.25rem;font-weight:700;color:#f1f5f9">Monthly Business Report</h1>
      <p style="margin:6px 0 0;color:#64748b;font-size:.9rem">${label}</p>
    </div>

    <!-- Stat Cards -->
    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:24px">
      ${statCard('New Leads', String(stats.newLeads ?? 0), '#3b82f6')}
      ${statCard('Jobs Won', String(stats.completed ?? 0), '#4ade80')}
      ${statCard('Revenue Won', fmt(stats.revenue ?? 0), '#22d3ee')}
      ${statCard(`Platform Cut (${pct}%)`, fmt(stats.platformCut ?? 0), '#f59e0b')}
    </div>

    <!-- Contractor Breakdown -->
    <div style="background:#131928;border-radius:12px;overflow:hidden;margin-bottom:24px">
      <div style="padding:16px 20px;border-bottom:1px solid #1e2535">
        <h2 style="margin:0;font-size:1rem;font-weight:700;color:#f1f5f9">Contractor Performance</h2>
        <p style="margin:4px 0 0;font-size:.8rem;color:#64748b">Real contractors only — demo contractors excluded</p>
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:.875rem">
        <thead>
          <tr style="background:#0b0f1a">
            <th style="padding:10px 14px;text-align:left;color:#64748b;font-weight:600;font-size:.75rem;text-transform:uppercase;letter-spacing:.05em">Contractor</th>
            <th style="padding:10px 14px;text-align:center;color:#64748b;font-weight:600;font-size:.75rem;text-transform:uppercase;letter-spacing:.05em">Leads</th>
            <th style="padding:10px 14px;text-align:center;color:#64748b;font-weight:600;font-size:.75rem;text-transform:uppercase;letter-spacing:.05em">Won</th>
            <th style="padding:10px 14px;text-align:right;color:#64748b;font-weight:600;font-size:.75rem;text-transform:uppercase;letter-spacing:.05em">Revenue</th>
            <th style="padding:10px 14px;text-align:right;color:#64748b;font-weight:600;font-size:.75rem;text-transform:uppercase;letter-spacing:.05em">Your Cut</th>
          </tr>
        </thead>
        <tbody>${contractorRows}</tbody>
      </table>
    </div>

    <!-- Footer -->
    <div style="text-align:center;color:#475569;font-size:.75rem">
      <p style="margin:0">Sent automatically by ${businessName} platform</p>
      <p style="margin:4px 0 0">Demo contractors are excluded from all figures above.</p>
    </div>

  </div>
</body>
</html>`;

    // ── Send via Resend ───────────────────────────────────────
    const resendRes = await fetch('https://api.resend.com/emails', {
      method:  'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type':  'application/json',
      },
      body: JSON.stringify({
        from:    fromEmail,
        to:      [recipient],
        reply_to: adminEmail || recipient,
        subject: `📊 ${businessName} — ${label} Business Report`,
        html,
      }),
    });

    const resendBody = await resendRes.json().catch(() => ({}));

    if (!resendRes.ok) {
      const msg = resendBody?.message || resendBody?.error || `Resend HTTP ${resendRes.status}`;
      console.error('[send-monthly-report] Resend error:', msg, resendBody);
      return jsonError(msg, 502);
    }

    return new Response(JSON.stringify({ ok: true, id: resendBody.id }), {
      status:  200,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
    });

  } catch (err) {
    console.error('[send-monthly-report] Unhandled error:', err);
    return jsonError(err instanceof Error ? err.message : String(err), 500);
  }
});

// ── DB Query Helper (for pg_cron auto-send) ──────────────────────

interface DbReportData {
  periodLabel: string;
  stats: { newLeads: number; completed: number; revenue: number; platformCut: number; commissionPct: number };
  contractors: Array<{ name: string; leads: number; won: number; revenue: number }>;
}

async function buildReportFromDb(sb: ReturnType<typeof createClient>, period: string): Promise<DbReportData | null> {
  try {
    const commissionPct = 15; // default — could be stored in a settings table

    // Date range
    const now   = new Date();
    let start: Date, end: Date;
    if (period === 'last-month') {
      start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
      end   = new Date(now.getFullYear(), now.getMonth(), 1);
    } else if (period === 'this-month') {
      start = new Date(now.getFullYear(), now.getMonth(), 1);
      end   = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    } else {
      start = new Date(now.getFullYear(), now.getMonth() - 3, 1);
      end   = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    }

    const labelDate = new Date(start);
    const periodLabel = labelDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

    // Fetch real contractors (exclude demo)
    const { data: ctrData } = await sb
      .from('contractors')
      .select('id, name, contractor_type')
      .neq('contractor_type', 'demo');

    const realCtrs  = (ctrData || []) as Array<{ id: string; name: string; contractor_type: string }>;
    const realIds   = new Set(realCtrs.map(c => c.id));

    // New leads in period (created_at)
    const { data: newLeadsData } = await sb
      .from('leads')
      .select('id, contractor_id')
      .gte('created_at', start.toISOString())
      .lt('created_at', end.toISOString());
    const newLeads = (newLeadsData || []).filter((l: { contractor_id: string }) => realIds.has(l.contractor_id));

    // Won leads in period (won_at)
    const { data: wonLeadsData } = await sb
      .from('leads')
      .select('id, contractor_id, final_value, quote_amount, value')
      .eq('status', 'completed')
      .gte('won_at', start.toISOString())
      .lt('won_at', end.toISOString());
    const wonLeads = (wonLeadsData || []).filter((l: { contractor_id: string }) => realIds.has(l.contractor_id));

    const revenue = wonLeads.reduce((s: number, l: { final_value?: number; quote_amount?: number; value?: number }) => {
      return s + (l.final_value ?? l.quote_amount ?? l.value ?? 0);
    }, 0);

    // Per-contractor breakdown
    const ctrMap: Record<string, { name: string; leads: number; won: number; revenue: number }> = {};
    for (const c of realCtrs) {
      ctrMap[c.id] = { name: c.name, leads: 0, won: 0, revenue: 0 };
    }
    for (const l of newLeads as Array<{ contractor_id: string }>) {
      if (ctrMap[l.contractor_id]) ctrMap[l.contractor_id].leads++;
    }
    for (const l of wonLeads as Array<{ contractor_id: string; final_value?: number; quote_amount?: number; value?: number }>) {
      if (ctrMap[l.contractor_id]) {
        ctrMap[l.contractor_id].won++;
        ctrMap[l.contractor_id].revenue += l.final_value ?? l.quote_amount ?? l.value ?? 0;
      }
    }
    const contractorRows = Object.values(ctrMap).filter(c => c.leads > 0 || c.won > 0);

    return {
      periodLabel,
      stats: {
        newLeads:     newLeads.length,
        completed:    wonLeads.length,
        revenue,
        platformCut:  revenue * commissionPct / 100,
        commissionPct,
      },
      contractors: contractorRows,
    };
  } catch (err) {
    console.error('[send-monthly-report] buildReportFromDb error:', err);
    return null;
  }
}


// ── Helpers ──────────────────────────────────────────────────────

function jsonError(message: string, status: number) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
  });
}

function statCard(label: string, value: string, color: string) {
  return `
    <div style="background:#131928;border-radius:10px;padding:16px 20px;border-left:3px solid ${color}">
      <div style="font-size:.75rem;color:#64748b;text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px">${label}</div>
      <div style="font-size:1.5rem;font-weight:800;color:${color}">${value}</div>
    </div>`;
}
