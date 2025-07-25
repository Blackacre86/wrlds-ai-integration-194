
declare global {
  interface Window {
    google: {
      maps: {
        Map: any;
        Marker: any;
        Geocoder: any;
        SymbolPath: {
          CIRCLE: any;
        };
        LatLng: any;
        Size: any;
        Point: any;
      };
    };
  }
}

export {};
