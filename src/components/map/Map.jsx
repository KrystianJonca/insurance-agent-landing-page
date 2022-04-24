import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Wrapper } from '@googlemaps/react-wrapper';

const StyledMap = styled.div`
  width: 100%;
  height: 100%;
`;

const render = (status) => {
  return <p>{status}</p>;
};

const markerPos = {
  lat: 50.56509064711147,
  lng: 21.168339712106395,
};

const Map = () => {
  const ref = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (ref.current && !map)
      setMap(
        new window.google.maps.Map(ref.current, { zoom: 14, center: markerPos })
      );

    new google.maps.Marker({ position: markerPos, map, title: 'My Office' });
  }, [ref, map]);

  return <StyledMap ref={ref} id="map"></StyledMap>;
};

const GoogleMap = () => {
  return (
    <Wrapper apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} render={render}>
      <Map />
    </Wrapper>
  );
};

export default GoogleMap;
