import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

function GoogleMaps() {
  const center = { lat: 40.693030, lng: -73.928160 };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!,
  });

  if (!isLoaded) {
    return <div>Loading</div>;
  }

  const icon = {
    url: '/market.png',
    scaledSize: new google.maps.Size(50, 50),
  };

  return (
    <div className="w-3/4">
      <div className="w-full h-full mt-3 px-16 pb-16">
        <GoogleMap
          center={center}
          zoom={16}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          options={{
            mapTypeControl: false,
            fullscreenControl: false,
            streetViewControl: false,
            zoomControl: false,
            draggable: false,
            keyboardShortcuts: false,
          }}
        >
          <Marker position={center} icon={icon} />
        </GoogleMap>
        <a
          className="bg-slate-900 text-white mt-6 py-2 px-5 rounded-md hover:bg-slate-800 text-md"
          type="button"
          style={{
            marginTop: '-200px', right: '33%', position: 'absolute', background: 'black',
          }}
          href="https://www.google.com/maps/dir//B%26K+Fish+Mini+Market,+1161+Broadway,+Brooklyn,+NY+11221/@40.6931023,-73.9302929,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c25c0c27efc183:0x2fec239093ef4e24!2m2!1d-73.9281125!2d40.6930868"
          target="blank"
          rel="noopener noreferrer"
        >
          Get Directions
        </a>
      </div>
    </div>
  );
}

export default GoogleMaps;
