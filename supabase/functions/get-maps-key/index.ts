
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const googleMapsApiKey = Deno.env.get('GOOGLE_MAPS_API_KEY') ?? null

    // If no key is configured, return a 200 with a clear message so the UI can fallback gracefully
    if (!googleMapsApiKey) {
      console.warn('Google Maps API key not configured in environment variables')
      return new Response(
        JSON.stringify({ key: null, verified: false, message: 'Missing GOOGLE_MAPS_API_KEY' }),
        {
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        },
      )
    }

    // Try a lightweight verification but NEVER fail the request
    let verified = true
    let message = 'OK'

    try {
      console.log('Verifying Google Maps API key...')
      const verifyUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=Boston&key=${googleMapsApiKey}`
      const verifyRes = await fetch(verifyUrl)
      const verifyJson = await verifyRes.json()
      console.log('API verification response:', verifyJson.status)

      if (verifyJson.status === 'REQUEST_DENIED') {
        verified = false
        message = 'REQUEST_DENIED - Geocoding API may be disabled for this key.'
      } else if (verifyJson.status === 'OVER_QUERY_LIMIT') {
        verified = false
        message = 'OVER_QUERY_LIMIT - Google Maps quota exceeded.'
      } else if (verifyJson.status !== 'OK' && verifyJson.status !== 'ZERO_RESULTS') {
        verified = false
        message = `Verification status: ${verifyJson.status}`
      }
    } catch (fetchError) {
      console.warn('API verification failed; returning key without verification:', fetchError)
      verified = false
      message = 'Verification failed'
    }

    // Always return 200 so the frontend can decide to show a fallback iframe without throwing
    return new Response(
      JSON.stringify({ key: googleMapsApiKey, verified, message }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      },
    )
  } catch (error) {
    console.error('Error in get-maps-key function:', error)
    return new Response(
      JSON.stringify({ key: null, verified: false, message: error instanceof Error ? error.message : 'Unknown error' }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      },
    )
  }
})
