import React, { FC } from 'react';
import { IUser } from 'utils/interfaces';
import * as S from './style';

interface IProps {
  user: IUser;
}

const UserInfo: FC<IProps> = ({ user }) => {
  return (
    <S.Container>
      <p>{user?.username}</p>
      <p>{user?.email}</p>
      <p>{user?.address.street}</p>
      <p>{user?.address.suite}</p>
    </S.Container>
  );
};

export default UserInfo;
