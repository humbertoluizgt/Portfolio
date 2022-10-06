import React, { useMemo } from 'react';
import { GoogleMap, useJsApiLoader, MarkerF, InfoBox } from '@react-google-maps/api';

function Map() {
  const center = useMemo(() => ({ lat: 53.47957289717093, lng: -2.237857878616326 }), []);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  const options = { closeBoxURL: '', enableEventPropagation: true };

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={ {width: "100%", height: "100%"} }
        center={center}
        zoom={13} 
      >
        <InfoBox
          options={options}
          position={center}
        >
        <div style={{ backgroundColor: 'black', opacity: 0.6, padding: "0.4rem", borderRadius: '0.3rem', zIndex: 100 }}>
          <div style={{ fontSize: '1.2rem'  }}>
            I live in Manchester
          </div>
        </div>
        </InfoBox>
        <MarkerF position={center} />
      </GoogleMap>
  ) : <><div>Map is Loading..</div></>
}

export default React.memo(Map)