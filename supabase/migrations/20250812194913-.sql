-- Secure account_lockouts: remove public access while preserving functionality via SECURITY DEFINER RPCs

-- Ensure RLS is enabled (safe if already enabled)
ALTER TABLE public.account_lockouts ENABLE ROW LEVEL SECURITY;

-- Drop overly permissive policy that allowed public access
DROP POLICY IF EXISTS "System can manage lockouts" ON public.account_lockouts;

-- Note: With no policies, direct SELECT/INSERT/UPDATE/DELETE are denied for anon/authenticated users.
-- The existing SECURITY DEFINER functions (check_account_lockout, record_failed_login, reset_failed_login)
-- will continue to operate with elevated privileges and are unaffected by RLS.
