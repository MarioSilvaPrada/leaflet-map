import React, { FC, useState, useEffect } from 'react';
import { getAllUsers } from 'api';
import { IUser } from 'utils/interfaces';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';

import UserCard from 'components/UserCard';
import * as S from './style';

interface IPos {
  lat: number;
  lng: number;
}

const FlyComponent = (props: { lat: number; lng: number }): null => {
  const { lat, lng } = props;
  const map = useMap();
  if (lat) {
    map.flyTo([lat, lng], 14, {
      duration: 5,
    });
  }
  return null;
};

const App: FC = () => {
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
      <S.CardsWrapper>
        {mapUsers.map((user: IUser) => (
          <UserCard
            key={user.id}
            user={user}
            onClick={() =>
              onCardClick(user.address.geo.lat, user.address.geo.lng)
            }
          />
        ))}
      </S.CardsWrapper>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
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
