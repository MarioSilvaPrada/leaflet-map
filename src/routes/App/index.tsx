import React, { FC, useState, useEffect, useRef } from 'react';
import { getAllUsers } from 'api';
import { IUser } from 'utils/interfaces';
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvent,
  useMap,
} from 'react-leaflet';
import * as S from './style';
import { latLng } from 'leaflet';

interface IPos {
  lat: number;
  lng: number;
}

const FlyComponent = (props): null => {
  const { lat, lng } = props;
  const map = useMap();
  if (lat) {
    map.flyTo([lat, lng], 14, {
      duration: 5,
    });
  }
  return null;
};

const App: FC = (props) => {
  const mapRef = useRef();
  const [mapUsers, setMapUsers] = useState<IUser[]>([]);

  const [userPosition, setUserPosition] = useState<IPos>({
    lat: 51.505,
    lng: -0.09,
  });

  const getUsers = async () => {
    const res = await getAllUsers();
    if (res) {
      setMapUsers(res);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {}, [userPosition]);

  const onCardClick = (lat: String, lng: string) => {
    setUserPosition({
      lat: Number(lat),
      lng: Number(lng),
    });
  };

  return (
    <S.Container>
      <h1>Home</h1>
      <S.CardsWrapper>
        {mapUsers.map((user: IUser) => (
          <S.UserCard
            key={user.id}
            onClick={() =>
              onCardClick(user.address.geo.lat, user.address.geo.lng)
            }
          >
            <p>{user.username}</p>
            <p>{user.address.city}</p>
            <p>{user.address.street}</p>
            <p>{user.address.geo.lat}</p>
            <p>{user.address.geo.lng}</p>
          </S.UserCard>
        ))}
      </S.CardsWrapper>
      <MapContainer
        ref={mapRef}
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[userPosition.lat, userPosition.lng]} />
        <FlyComponent lat={userPosition.lat} lng={userPosition.lng} />
      </MapContainer>
    </S.Container>
  );
};

export default App;
