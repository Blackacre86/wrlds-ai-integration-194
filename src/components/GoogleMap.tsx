
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

  // Fallback iframe URL
  const fallbackUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2943.825635!2d-71.68234!3d42.41234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e394a2a123456789:0x123456789abcdef!2s1042%20Main%20St%20%23C%2C%20Clinton%2C%20MA%2001510!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus&q=${encodeURIComponent(address)}`;

  useEffect(() => {
    const getApiKey = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('get-maps-key');
        if (error) throw error;
        setApiKey(data?.key);
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
      script.onerror = () => setError('Failed to load Google Maps');
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
                featureType: 'all',
                elementType: 'geometry.fill',
                stylers: [{ color: '#f5f5f5' }]
              },
              {
                featureType: 'administrative',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#444444' }]
              },
              {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#ffffff' }]
              },
              {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#e1e1e1' }]
              }
            ]
          });

          new window.google.maps.Marker({
            position: results[0].geometry.location,
            map,
            title,
            icon: {
              path: window.google.maps.SymbolPath.CIRCLE,
              scale: 8,
              fillColor: '#000000',
              fillOpacity: 1,
              strokeColor: '#ffffff',
              strokeWeight: 2
            }
          });

          setMapLoaded(true);
        } else {
          setError('Failed to geocode address');
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
          <div className="text-gray-500">Loading map...</div>
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
