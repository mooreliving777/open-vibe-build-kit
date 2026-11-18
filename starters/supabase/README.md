# Optional Supabase Row Level Security lab

This is **SQL for review only**. No database is provisioned or modified by the toolkit. It creates a sample `public.notes` table where signed-in users may see and edit only their own rows. Run it only in a separate sandbox project after you understand the statements.

## Learning steps

1. In a practice Supabase project, inspect the SQL in [`schema.sql`](schema.sql).
2. Review the RLS policy `auth.uid() = user_id` for `SELECT`, `INSERT`, `UPDATE` and `DELETE`.
3. Use Supabase's SQL editor only with explicit review; a migration changes database state.
4. Test with two separate, non-admin authentication identities to ensure cross-user access fails.
5. Never put a Supabase secret/service-role key into frontend code.
6. Check provider free-tier limits and disable any paid upgrades if keeping a $0 budget.

The example assumes Supabase Auth is already configured. It does not implement registration, login or billing. `auth.uid()` is `null` for unauthenticated requests, so the shown policies deny user-owned rows to anonymous sessions.
