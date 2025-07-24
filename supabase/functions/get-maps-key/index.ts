
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
      throw new Error('Google Maps API key not configured in environment variables')
    }

    // Quick check to ensure Geocoding API access
    console.log('Verifying Google Maps API key...')
    const verifyUrl =
      `https://maps.googleapis.com/maps/api/geocode/json?address=Boston&key=${googleMapsApiKey}`
    
    try {
      const verifyRes = await fetch(verifyUrl)
      const verifyJson = await verifyRes.json()
      
      console.log('API verification response:', verifyJson.status)
      
      if (verifyJson.status === 'REQUEST_DENIED') {
        throw new Error('Google Maps API key missing Geocoding API permission. Please enable the Geocoding API in Google Cloud Console.')
      }
      
      if (verifyJson.status === 'OVER_QUERY_LIMIT') {
        throw new Error('Google Maps API quota exceeded. Please check your usage limits.')
      }
      
      if (verifyJson.status !== 'OK' && verifyJson.status !== 'ZERO_RESULTS') {
        throw new Error(`Google Maps API verification failed with status: ${verifyJson.status}`)
      }
    } catch (fetchError) {
      console.error('API verification failed:', fetchError)
      throw new Error(`Unable to verify Google Maps API: ${fetchError.message}`)
    }

    console.log('Google Maps API key verified successfully')
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
