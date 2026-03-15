-- ============================================================
--  fix_contractor_identity.sql
--  Run ONCE in Supabase SQL Editor.
--
--  PURPOSE:
--  Permanently fixes contractor company identity so no contractor
--  ever shows a blank name, another contractor's name, or a demo
--  company name.
--
--  WHAT IT DOES:
--  1. Backfills blank/null company_name from the name column
--  2. Ensures name and company_name are in sync
--  3. Adds a NOT NULL + non-empty CHECK constraint on company_name
--     so future inserts/updates cannot create broken identity rows
--
--  SAFE TO AUDIT FIRST:
--  Run the SELECT at the bottom to preview which rows will change
--  before committing the UPDATEs.
-- ============================================================


-- ── STEP 0: Preview (run this first to see what will be fixed) ──
-- SELECT id, email, name, company_name, auth_user_id, is_active
-- FROM contractors
-- WHERE (company_name IS NULL OR TRIM(company_name) = '')
--    OR (name IS NULL OR TRIM(name) = '')
-- ORDER BY company_name, name;


-- ── STEP 1: Backfill company_name from name ──────────────────
-- Any row with a blank/null company_name inherits the name column.
UPDATE contractors
SET company_name = name
WHERE (company_name IS NULL OR TRIM(company_name) = '')
  AND name IS NOT NULL
  AND TRIM(name) != '';


-- ── STEP 2: Backfill name from company_name ──────────────────
-- Keeps both columns in sync. If name is blank but company_name is set,
-- fill it in so legacy code paths that read `name` also work correctly.
UPDATE contractors
SET name = company_name
WHERE (name IS NULL OR TRIM(name) = '')
  AND company_name IS NOT NULL
  AND TRIM(company_name) != '';


-- ── STEP 3: Last-resort fallback — use email ─────────────────
-- Only applies to rows where BOTH name and company_name are still blank.
-- Sets a clearly identifiable value so admins can spot and fix them.
UPDATE contractors
SET
  company_name = 'UNKNOWN — ' || COALESCE(email, id),
  name         = 'UNKNOWN — ' || COALESCE(email, id)
WHERE (company_name IS NULL OR TRIM(company_name) = '')
   OR (name IS NULL OR TRIM(name) = '');


-- ── STEP 4: Keep name = company_name going forward ───────────
-- Ensures the two columns always match after any future update.
-- (The application _rowToContractor() mapper reads company_name first,
--  but legacy code paths still read name — keeping them equal avoids drift.)
UPDATE contractors
SET name = company_name
WHERE name IS DISTINCT FROM company_name;


-- ── STEP 5: Add NOT NULL constraints ─────────────────────────
-- Safe to add now because all rows are populated after steps 1–4.
ALTER TABLE contractors
  ALTER COLUMN company_name SET NOT NULL,
  ALTER COLUMN company_name SET DEFAULT '',
  ALTER COLUMN name         SET NOT NULL,
  ALTER COLUMN name         SET DEFAULT '';


-- ── STEP 6: Add CHECK constraints ────────────────────────────
-- Blocks future inserts/updates with blank company names.
-- Uses DO blocks so the migration is idempotent (safe to re-run).
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'chk_company_name_not_blank' AND conrelid = 'contractors'::regclass
  ) THEN
    ALTER TABLE contractors
      ADD CONSTRAINT chk_company_name_not_blank CHECK (TRIM(company_name) != '');
    RAISE NOTICE 'Added constraint chk_company_name_not_blank';
  ELSE
    RAISE NOTICE 'Constraint chk_company_name_not_blank already exists — skipped';
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'chk_name_not_blank' AND conrelid = 'contractors'::regclass
  ) THEN
    ALTER TABLE contractors
      ADD CONSTRAINT chk_name_not_blank CHECK (TRIM(name) != '');
    RAISE NOTICE 'Added constraint chk_name_not_blank';
  ELSE
    RAISE NOTICE 'Constraint chk_name_not_blank already exists — skipped';
  END IF;
END $$;


-- ── STEP 7: Verify ───────────────────────────────────────────
-- Run this after the migration to confirm all rows are correct.
SELECT
  id,
  email,
  name,
  company_name,
  auth_user_id IS NOT NULL AS has_auth,
  is_active,
  invited_at IS NOT NULL   AS was_invited
FROM contractors
ORDER BY company_name;
