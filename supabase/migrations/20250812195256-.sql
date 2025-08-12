-- Secure client_allowlist by removing public SELECT and adding a safe RPC

-- Ensure RLS is enabled
ALTER TABLE public.client_allowlist ENABLE ROW LEVEL SECURITY;

-- Drop the public-readable policy
DROP POLICY IF EXISTS "Anyone can check email allowlist" ON public.client_allowlist;

-- Optionally, keep no policies for now (deny all direct access). Admins can use SQL directly.

-- Create a SECURITY DEFINER function to check a single email without exposing the table
CREATE OR REPLACE FUNCTION public.check_client_allowlist(p_email text)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
DECLARE
  rec RECORD;
  result jsonb;
BEGIN
  SELECT id, email, status, expires_at INTO rec
  FROM public.client_allowlist
  WHERE lower(email) = lower(p_email)
  ORDER BY created_at DESC
  LIMIT 1;

  IF rec IS NULL THEN
    result := jsonb_build_object(
      'exists', false,
      'status', NULL,
      'is_valid', false,
      'reason', 'not_found'
    );
  ELSE
    result := jsonb_build_object(
      'exists', true,
      'status', rec.status,
      'is_valid', (rec.expires_at IS NULL OR rec.expires_at > now())
    );
  END IF;

  RETURN result;
END;
$function$;

-- Restrict execution to anon/authenticated roles only (not necessary to grant since definer, but for clarity)
REVOKE ALL ON FUNCTION public.check_client_allowlist(p_email text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.check_client_allowlist(p_email text) TO anon, authenticated;
