
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

  // CORRECTED coordinates for 1042 Main Street, Suite C, Clinton, MA 01510
  const exactCoords = { lat: 42.4329, lng: -71.6896 };
  
  // Updated fallback URL with the correct embed code from the working iframe
  const fallbackUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4164.514615379953!2d-71.68960657791875!3d42.432917130464254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3f1969551a46d%3A0xf644873c426bbbd!2s1042%20Main%20St!5e0!3m2!1sen!2sus!4v1753132459146!5m2!1sen!2sus`;

  useEffect(() => {
    const getApiKey = async () => {
      try {
        console.log('Fetching Google Maps API key...');
        const { data, error } = await supabase.functions.invoke('get-maps-key');
        
        if (error) {
          console.error('Error from get-maps-key function:', error);
          throw error;
        }
        
        if (data?.key) {
          console.log('Successfully retrieved API key');
          setApiKey(data.key);
        } else {
          throw new Error('No API key returned from function');
        }
      } catch (err) {
        console.error('Error getting Maps API key:', err);
        setError('Failed to load Maps API key');
      }
    };

    getApiKey();
  }, []);

  useEffect(() => {
    if (!apiKey || !mapRef.current) return;

    const loadGoogleMaps = () => {
      if (window.google && window.google.maps) {
        initializeMap();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initializeMap;
      script.onerror = () => {
        console.error('Failed to load Google Maps API');
        setError('Failed to load Google Maps');
      };
      document.head.appendChild(script);
    };

    const initializeMap = () => {
      if (!window.google || !mapRef.current) return;

      const geocoder = new window.google.maps.Geocoder();
      
      geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK' && results && results[0]) {
          const map = new window.google.maps.Map(mapRef.current!, {
            zoom,
            center: results[0].geometry.location,
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
            position: results[0].geometry.location,
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
          console.log('Google Maps loaded successfully with geocoding');
        } else {
          console.error('Geocoding failed:', status);
          // Fall back to exact coordinates if geocoding fails
          const map = new window.google.maps.Map(mapRef.current!, {
            zoom,
            center: exactCoords,
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
            position: exactCoords,
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
          console.log('Google Maps loaded with exact coordinates (geocoding unavailable)');
        }
      });
    };

    loadGoogleMaps();
  }, [apiKey, address, title, zoom]);

  if (error || !apiKey) {
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
        />
        {error && (
          <div className="absolute top-2 left-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
            Using fallback map
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
        >
          <MapPin className="w-4 h-4 mr-2" />
          Get Directions
        </a>
      </div>
    </div>
  );
};

export default GoogleMap;
