-- Run this once against your Vercel Postgres database before the contact
-- form will work. Easiest way: Vercel dashboard → your project → Storage →
-- your Postgres database → "Query" tab → paste this in and run it.
--
-- (Or, from your machine, with the Vercel CLI installed and the project
-- linked: `vercel env pull` to get POSTGRES_URL locally, then
-- `psql "$POSTGRES_URL" -f scripts/schema.sql`.)

CREATE TABLE IF NOT EXISTS contact_submissions (
    id          SERIAL PRIMARY KEY,
    name        TEXT NOT NULL,
    contact     TEXT NOT NULL,      -- email or phone, whatever they typed
    interest    TEXT,               -- selected option from the "Interested in" dropdown
    message     TEXT,               -- project details textarea
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Handy for the showroom team: most recent inquiries first.
CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx
    ON contact_submissions (created_at DESC);
