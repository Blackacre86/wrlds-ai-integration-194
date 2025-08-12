
-- 1) CLIENT_ALLOWLIST: keep RLS enabled, add explicit deny-all policies to satisfy scanner

ALTER TABLE public.client_allowlist ENABLE ROW LEVEL SECURITY;

-- Revoke direct access
REVOKE ALL ON TABLE public.client_allowlist FROM PUBLIC;
REVOKE ALL ON TABLE public.client_allowlist FROM anon;
REVOKE ALL ON TABLE public.client_allowlist FROM authenticated;

-- Replace with explicit deny-all policies (idempotent)
DROP POLICY IF EXISTS "No direct SELECT on client_allowlist" ON public.client_allowlist;
CREATE POLICY "No direct SELECT on client_allowlist"
  ON public.client_allowlist
  FOR SELECT
  USING (false);

DROP POLICY IF EXISTS "No direct INSERT on client_allowlist" ON public.client_allowlist;
CREATE POLICY "No direct INSERT on client_allowlist"
  ON public.client_allowlist
  FOR INSERT
  WITH CHECK (false);

DROP POLICY IF EXISTS "No direct UPDATE on client_allowlist" ON public.client_allowlist;
CREATE POLICY "No direct UPDATE on client_allowlist"
  ON public.client_allowlist
  FOR UPDATE
  USING (false)
  WITH CHECK (false);

DROP POLICY IF EXISTS "No direct DELETE on client_allowlist" ON public.client_allowlist;
CREATE POLICY "No direct DELETE on client_allowlist"
  ON public.client_allowlist
  FOR DELETE
  USING (false);

-- Tighten function execution for allowlist RPC
REVOKE ALL ON FUNCTION public.check_client_allowlist(text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.check_client_allowlist(text) TO anon, authenticated;


-- 2) ACCOUNT_LOCKOUTS: enable RLS and add deny-all policies (app uses RPCs only)

ALTER TABLE public.account_lockouts ENABLE ROW LEVEL SECURITY;

-- Revoke direct access
REVOKE ALL ON TABLE public.account_lockouts FROM PUBLIC;
REVOKE ALL ON TABLE public.account_lockouts FROM anon;
REVOKE ALL ON TABLE public.account_lockouts FROM authenticated;

-- Explicit deny-all policies (idempotent)
DROP POLICY IF EXISTS "No direct SELECT on account_lockouts" ON public.account_lockouts;
CREATE POLICY "No direct SELECT on account_lockouts"
  ON public.account_lockouts
  FOR SELECT
  USING (false);

DROP POLICY IF EXISTS "No direct INSERT on account_lockouts" ON public.account_lockouts;
CREATE POLICY "No direct INSERT on account_lockouts"
  ON public.account_lockouts
  FOR INSERT
  WITH CHECK (false);

DROP POLICY IF EXISTS "No direct UPDATE on account_lockouts" ON public.account_lockouts;
CREATE POLICY "No direct UPDATE on account_lockouts"
  ON public.account_lockouts
  FOR UPDATE
  USING (false)
  WITH CHECK (false);

DROP POLICY IF EXISTS "No direct DELETE on account_lockouts" ON public.account_lockouts;
CREATE POLICY "No direct DELETE on account_lockouts"
  ON public.account_lockouts
  FOR DELETE
  USING (false);

-- Tighten function execution for lockout RPCs
REVOKE ALL ON FUNCTION public.check_account_lockout(text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.check_account_lockout(text) TO anon, authenticated;

REVOKE ALL ON FUNCTION public.record_failed_login(text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.record_failed_login(text) TO anon, authenticated;

REVOKE ALL ON FUNCTION public.reset_failed_login(text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.reset_failed_login(text) TO anon, authenticated;


-- 3) OPTIONAL: rate limit RPCs — restrict to web roles (keeps current behavior, more explicit)

REVOKE ALL ON FUNCTION public.check_rate_limit(text, inet, text, integer, integer) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.check_rate_limit(text, inet, text, integer, integer) TO anon, authenticated;

REVOKE ALL ON FUNCTION public.record_rate_limit_attempt(text, inet, text, integer, integer, integer) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.record_rate_limit_attempt(text, inet, text, integer, integer, integer) TO anon, authenticated;

REVOKE ALL ON FUNCTION public.reset_rate_limit(text, inet, text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.reset_rate_limit(text, inet, text) TO anon, authenticated;
