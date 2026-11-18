-- Educational example. Run ONLY after review in an isolated sandbox project.
-- Supabase provides auth.users and auth.uid().
create table if not exists public.notes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null check (char_length(title) between 1 and 200),
  body text not null default '',
  created_at timestamptz not null default now()
);

alter table public.notes enable row level security;

create policy "read own notes" on public.notes
  for select to authenticated using (auth.uid() = user_id);
create policy "insert own notes" on public.notes
  for insert to authenticated with check (auth.uid() = user_id);
create policy "edit own notes" on public.notes
  for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "delete own notes" on public.notes
  for delete to authenticated using (auth.uid() = user_id);

-- Idempotency note: the table is IF NOT EXISTS, but the CREATE POLICY statements are
-- NOT idempotent; do not execute the complete file twice without reviewing policies.
