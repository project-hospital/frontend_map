import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

function GoogleMapComponent() {
  const mapStyles = {
    height: '100%',
    width: '75vw'
  };

  const defaultCenter = {
    lat: 37.73,
    lng: 127.04
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <div style={mapStyles}>
        <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
          {/* 여기에 추가적인 구성 요소를 추가할 수 있습니다. */}
        </GoogleMap>
      </div>
    </LoadScript>
  );
}

export default GoogleMapComponent;
