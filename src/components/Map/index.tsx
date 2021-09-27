import React, { FC } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';

interface IPos {
  lat: number;
  lng: number;
}

const FlyComponent = (props: { lat: number; lng: number }): null => {
  const { lat, lng } = props;
  const map = useMap();
  if (lat) {
    map.flyTo([lat, lng], 14, {
      duration: 3,
    });
  }
  return null;
};

const Map: FC<IPos> = ({ lat, lng }) => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} />
      <FlyComponent lat={lat} lng={lng} />
    </MapContainer>
  );
};

export default Map;
