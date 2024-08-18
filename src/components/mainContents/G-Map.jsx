import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import _ from 'lodash-es';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import mapsDataState from '../../store/maps';

export default function GoogleMapComponent() {
  const mapStyles = {
    height: '100%',
    width: '100%'
  };

  const options = [
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }]
    }
  ];
  const [mapsDataOrigin, setMapsDataOrigin] = useRecoilState(mapsDataState);
  const [mapsData, setMapsData] = useState(_.cloneDeep(mapsDataOrigin));
  const [mapInstance, setMapInstance] = useState(null);

  useEffect(() => {
    setMapsData(_.cloneDeep(mapsDataOrigin));
  }, [mapsDataOrigin]);

  const handleZoomChanged = () => {
    if (mapInstance) {
      const newZoom = mapInstance.getZoom();
      setMapsData((prevState) => ({
        ...prevState,
        zoom: newZoom
      }));
      setMapsDataOrigin((prevState) => ({
        ...prevState,
        zoom: newZoom
      }));
    }
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <div style={mapStyles}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={mapsData.zoom}
          center={mapsData.maker}
          options={{ disableDefaultUI: true, styles: options }}
          onLoad={(map) => setMapInstance(map)}
          onZoomChanged={(map) => handleZoomChanged(map)}
        >
          <MarkerF position={{ lat: mapsData.maker.lat, lng: mapsData.maker.lng }} />
        </GoogleMap>
      </div>
    </LoadScript>
  );
}
