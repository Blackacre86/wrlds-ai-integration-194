
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
    const googleMapsApiKey = Deno.env.get('GOOGLE_MAPS_API_KEY')

    if (!googleMapsApiKey) {
      throw new Error('Google Maps API key not configured')
    }

    // Quick check to ensure Geocoding API access
    const verifyUrl =
      `https://maps.googleapis.com/maps/api/geocode/json?address=Boston&key=${googleMapsApiKey}`
    const verifyRes = await fetch(verifyUrl)
    const verifyJson = await verifyRes.json()
    if (verifyJson.status === 'REQUEST_DENIED') {
      throw new Error('Google Maps API key missing Geocoding API permission')
    }

    return new Response(
      JSON.stringify({ key: googleMapsApiKey }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )
  } catch (error) {
    console.error('Error in get-maps-key function:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 400, 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )
  }
})
