
import React, { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface GoogleMapProps {
  address: string;
  title: string;
  zoom?: number;
  height?: number;
  className?: string;
  showFallback?: boolean;
}

const GoogleMap: React.FC<GoogleMapProps> = ({
  address,
  title,
  zoom = 15,
  height = 300,
  className = "",
  showFallback = true
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [apiKey, setApiKey] = useState<string | null>(null);

  console.log('[GoogleMap] Initializing GoogleMap component');

  // CORRECTED coordinates for 1042 Main Street, Suite C, Clinton, MA 01510
  const exactCoords = { lat: 42.4329, lng: -71.6896 };
  
  // Updated fallback URL with the correct embed code from the working iframe
  const fallbackUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4164.514615379953!2d-71.68960657791875!3d42.432917130464254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3f1969551a46d%3A0xf644873c426bbbd!2s1042%20Main%20St!5e0!3m2!1sen!2sus!4v1753132459146!5m2!1sen!2sus`;

  useEffect(() => {
    const getApiKey = async () => {
      try {
        console.log('[GoogleMap] Fetching Google Maps API key...');
        const { data, error } = await supabase.functions.invoke('get-maps-key');
        
        if (error) {
          console.error('[GoogleMap] Error from get-maps-key function:', error);
          setError(`API key fetch failed: ${error.message}`);
          return;
        }
        
        if (data?.key) {
          console.log('[GoogleMap] Successfully retrieved API key');
          setApiKey(data.key);
        } else {
          console.error('[GoogleMap] No API key returned from function');
          setError('No API key returned from function');
        }
      } catch (err) {
        console.error('[GoogleMap] Error getting Maps API key:', err);
        setError(`Failed to load Maps API key: ${err instanceof Error ? err.message : 'Unknown error'}`);
      }
    };

    getApiKey();
  }, []);

  useEffect(() => {
    if (!apiKey || !mapRef.current) {
      console.log('[GoogleMap] Skipping map initialization - missing apiKey or mapRef');
      return;
    }

    const loadGoogleMaps = () => {
      if (window.google && window.google.maps) {
        console.log('[GoogleMap] Google Maps API already loaded, initializing map');
        initializeMap();
        return;
      }

      console.log('[GoogleMap] Loading Google Maps API script');
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        console.log('[GoogleMap] Google Maps API script loaded successfully');
        initializeMap();
      };
      script.onerror = (scriptError) => {
        console.error('[GoogleMap] Failed to load Google Maps API script:', scriptError);
        setError('Failed to load Google Maps API script');
      };
      document.head.appendChild(script);
    };

    const initializeMap = () => {
      try {
        if (!window.google || !mapRef.current) {
          console.error('[GoogleMap] Google Maps API or map container not available');
          return;
        }

        console.log('[GoogleMap] Initializing map with geocoding');
        const geocoder = new window.google.maps.Geocoder();
        
        geocoder.geocode({ address }, (results, status) => {
          try {
            if (status === 'OK' && results && results[0]) {
              console.log('[GoogleMap] Geocoding successful, creating map');
              createMapWithLocation(results[0].geometry.location);
            } else {
              console.warn('[GoogleMap] Geocoding failed with status:', status, 'Using exact coordinates');
              createMapWithLocation(new window.google.maps.LatLng(exactCoords.lat, exactCoords.lng));
            }
          } catch (mapError) {
            console.error('[GoogleMap] Error in geocoding callback:', mapError);
            setError(`Map initialization failed: ${mapError instanceof Error ? mapError.message : 'Unknown error'}`);
          }
        });
      } catch (initError) {
        console.error('[GoogleMap] Error in initializeMap:', initError);
        setError(`Map initialization failed: ${initError instanceof Error ? initError.message : 'Unknown error'}`);
      }
    };

    const createMapWithLocation = (location: any) => {
      try {
        const map = new window.google.maps.Map(mapRef.current!, {
          zoom,
          center: location,
          styles: [
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [{ visibility: 'on' }]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{ color: '#ffffff' }]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#666666' }]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{ color: '#c9e7f7' }]
            },
            {
              featureType: 'landscape',
              elementType: 'geometry',
              stylers: [{ color: '#f5f5f5' }]
            }
          ]
        });

        new window.google.maps.Marker({
          position: location,
          map,
          title,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: '#dc2626',
            fillOpacity: 1,
            strokeColor: '#ffffff',
            strokeWeight: 3
          }
        });

        setMapLoaded(true);
        setError(null);
        console.log('[GoogleMap] Google Maps loaded successfully');
      } catch (mapError) {
        console.error('[GoogleMap] Error creating map:', mapError);
        setError(`Failed to create map: ${mapError instanceof Error ? mapError.message : 'Unknown error'}`);
      }
    };

    loadGoogleMaps();
  }, [apiKey, address, title, zoom]);

  if (error || !apiKey) {
    console.log('[GoogleMap] Rendering fallback map due to error or missing API key');
    
    if (!showFallback) return null;
    
    return (
      <div className={`relative ${className}`}>
        <iframe
          src={fallbackUrl}
          width="100%"
          height={height}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
          title={title}
          onError={() => console.error('[GoogleMap] Fallback iframe failed to load')}
        />
        {error && (
          <div className="absolute top-2 left-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
            Using fallback map - {error}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <div 
        ref={mapRef} 
        style={{ height: `${height}px` }} 
        className="w-full rounded-lg shadow-lg"
      />
      {!mapLoaded && (
        <div className="absolute inset-0 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-gray-500">Loading interactive map...</div>
        </div>
      )}
      <div className="mt-4 text-center">
        <a 
          href={`https://maps.google.com/?q=${encodeURIComponent(address)}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
          onClick={() => console.log('[GoogleMap] Directions link clicked')}
        >
          <MapPin className="w-4 h-4 mr-2" />
          Get Directions
        </a>
      </div>
    </div>
  );
};

export default GoogleMap;
