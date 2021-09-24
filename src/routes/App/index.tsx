import React, { FC, useState, useEffect } from 'react';
import { getAllUsers } from 'api';
import { IUser } from 'utils/interfaces';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import * as S from './style';

const App: FC = () => {
  const [mapUsers, setMapUsers] = useState<IUser[]>([]);

  const getUsers = async () => {
    const res = await getAllUsers();

    if (res) {
      setMapUsers(res);
    }
  };

  return (
    <S.Container>
      <h1>Home</h1>
      {mapUsers.map((user: IUser) => (
        <div key={user.id}>
          <p>{user.username}</p>
          <p>{user.phone}</p>
        </div>
      ))}
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </S.Container>
  );
};

export default App;
