/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';

interface Props {
  location:string,
  setLocation: React.Dispatch<React.SetStateAction<string>>
}

function GoogleMapsCheckout({ location, setLocation }:Props) {
  const [maps, setMaps] = useState<any>(/** @type google.maps.GoogleMap */(null));
  const [lat, setLat] = useState<number>(40.693030);
  const [lng, setLng] = useState<number>(-73.928160);
  const [geocodeMessage, setGeocodeMessage] = useState<string>('');
  const center = { lat: 40.693030, lng: -73.928160 };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!,
  });

  if (!isLoaded) {
    return <div>Loading</div>;
  }

  const geocodeLocation = () => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location.replaceAll(/[\s,]+/g, '+')}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'OK') {
          setGeocodeMessage('Location has been formatted, Click again to center on map');
          setLocation(data.results[0].formatted_address);
          setLat(data.results[0].geometry.location.lat);
          setLng(data.results[0].geometry.location.lng);
          maps.panTo({ lat: data.results[0].geometry.location.lat, lng: data.results[0].geometry.location.lng });
        } else {
          setGeocodeMessage('Location not found please try again');
        }
      });
  };

  return (
    <>
      <p className="text-lg font-semibold mb-2 mt-3 text-left">Address</p>
      <label htmlFor="address">
        <input
          className="text-xl border p-3 hover:outline-none focus:outline-none focus:ring-1 focus:ring-slate-900 rounded-md w-full"
          type="text"
          name="address"
          placeholder="Shipping Address"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <div className="flex items-end">
        <button
          type="button"
          className="bg-slate-900 text-white mt-5 py-2 px-10 rounded-md hover:bg-slate-800 text-xl"
          onClick={geocodeLocation}
        >
          Format Address

        </button>
        <p className="text-xl px-5 py-1 font-bold">{geocodeMessage}</p>
      </div>
      <div className="h-96 w-full">
        <GoogleMap
          center={center}
          zoom={13}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          options={{
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={(map) => setMaps(map)}
        >
          <Marker position={{ lat, lng }} />
        </GoogleMap>
      </div>
    </>
  );
}

export default GoogleMapsCheckout;
