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

  const getUsers = async () => {
    const res = await getAllUsers();
    if (res) {
      setMapUsers(res);
    }
  };

  const onCardClick = (user: IUser) => {
    setSelectedUser(user);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <S.Container>
      <S.LeftContainer>
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
      </S.LeftContainer>
      <S.RightContainer>
        <UserInfo user={selectedUser} />
        <S.MapWrapper>
          <Map
            lat={Number(selectedUser?.address.geo.lat) || 51.505}
            lng={Number(selectedUser?.address.geo.lng) || -0.09}
          />
        </S.MapWrapper>
      </S.RightContainer>
    </S.Container>
  );
};

export default App;
