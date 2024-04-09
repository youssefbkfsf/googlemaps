import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import styled from 'styled-components';

const MapContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Map = () => {
  const mapStyles = {
    height: '50vh',
    width: '80%',
    margin: 'auto',
    borderRadius: '10px',
  };

  return (
    <MapContainer>
      <LoadScript googleMapsApiKey="YOUR_API_KEY">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={10}
          center={{ lat: 37.7749, lng: -122.4194 }} // San Francisco coordinates
        ></GoogleMap>
      </LoadScript>
    </MapContainer>
  );
};

