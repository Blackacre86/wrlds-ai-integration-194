
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import emailjs from 'npm:emailjs-com@3.2.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface EmailRequest {
  type: 'contact' | 'newsletter';
  name?: string;
  email: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, name, email, message }: EmailRequest = await req.json();

    // Get EmailJS credentials from environment
    const EMAILJS_SERVICE_ID = Deno.env.get('EMAILJS_SERVICE_ID');
    const EMAILJS_TEMPLATE_ID = Deno.env.get('EMAILJS_TEMPLATE_ID');
    const EMAILJS_PUBLIC_KEY = Deno.env.get('EMAILJS_PUBLIC_KEY');

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error('Missing EmailJS credentials');
      return new Response(
        JSON.stringify({ error: 'EmailJS configuration error' }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        }
      );
    }

    // Prepare template parameters based on email type
    let templateParams;
    if (type === 'contact') {
      templateParams = {
        from_name: name || 'Unknown',
        from_email: email,
        message: message || '',
        to_name: 'Summit Law Offices',
        reply_to: email
      };
    } else if (type === 'newsletter') {
      templateParams = {
        from_name: 'Legal Newsletter Subscriber',
        from_email: email,
        message: `New legal newsletter subscription request from the Summit Law website.`,
        to_name: 'Summit Law Offices',
        reply_to: email
      };
    } else {
      return new Response(
        JSON.stringify({ error: 'Invalid email type' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        }
      );
    }

    console.log('Sending email with params:', templateParams);

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('Email sent successfully:', response);

    return new Response(
      JSON.stringify({ success: true, response }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );

  } catch (error: any) {
    console.error('Error sending email:', error);
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to send email',
        details: error.message 
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );
  }
};

serve(handler);
