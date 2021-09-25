import React, { FC, useState, useEffect } from 'react';
import { getAllUsers } from 'api';
import { IUser } from 'utils/interfaces';

import UserCard from 'components/UserCard';
import UserInfo from 'components/UserInfo';
import Map from 'components/Map';
import * as S from './style';

interface IPos {
  lat: number;
  lng: number;
}

const App: FC = () => {
  const [mapUsers, setMapUsers] = useState<IUser[]>([]);
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);
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

  const onCardClick = (user: IUser) => {
    const { lat, lng } = user.address.geo;
    setUserPosition({
      lat: Number(lat),
      lng: Number(lng),
    });

    setSelectedUser(user);
  };

  return (
    <S.Container>
      <S.RightContainer>
        <S.Title>Select a user</S.Title>
        <S.CardsWrapper>
          {mapUsers.map((user: IUser) => (
            <UserCard
              key={user.id}
              isSelected={user.id === selectedUser?.id}
              user={user}
              onClick={() => onCardClick(user)}
            />
          ))}
        </S.CardsWrapper>
      </S.RightContainer>
      <S.LeftContainer>
        <UserInfo user={selectedUser} />
        <Map lat={userPosition.lat} lng={userPosition.lng} />
      </S.LeftContainer>
    </S.Container>
  );
};

export default App;
