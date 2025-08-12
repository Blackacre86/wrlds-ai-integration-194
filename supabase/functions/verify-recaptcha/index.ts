import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface VerifyBody { token?: string }

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { token }: VerifyBody = await req.json();
    if (!token) {
      return new Response(
        JSON.stringify({ success: false, error: "missing_token" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const secret = Deno.env.get("RECAPTCHA_SECRET_KEY");
    if (!secret) {
      console.error("RECAPTCHA_SECRET_KEY not configured");
      return new Response(
        JSON.stringify({ success: false, error: "server_misconfigured" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const form = new URLSearchParams();
    form.append("secret", secret);
    form.append("response", token);

    const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: form.toString(),
    });

    const result = await verifyRes.json();

    // Normalize response
    const payload = {
      success: !!result.success,
      score: typeof result.score === "number" ? result.score : undefined,
      action: result.action ?? undefined,
      hostname: result.hostname ?? undefined,
      error_codes: result["error-codes"] ?? undefined,
    };

    return new Response(JSON.stringify(payload), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (e) {
    console.error("verify-recaptcha error:", e);
    return new Response(
      JSON.stringify({ success: false, error: "server_error" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});