-- ============================================================
-- Rubi Royals — Contact Form Submissions Table
-- Run this ONCE in your Supabase SQL editor:
-- Dashboard → SQL Editor → New Query → paste → Run
-- ============================================================

create table if not exists public.contact_submissions (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text not null,
  message     text not null,
  created_at  timestamptz default now() not null
);

-- Enable Row Level Security
alter table public.contact_submissions enable row level security;

-- Allow INSERT from the anon key (used by the contact form server function)
create policy "Allow anon insert"
  on public.contact_submissions
  for insert
  to anon
  with check (true);

-- (Optional) Allow admins to read all rows
-- create policy "Allow authenticated select"
--   on public.contact_submissions
--   for select
--   to authenticated
--   using (true);
