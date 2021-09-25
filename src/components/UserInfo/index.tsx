import React, { FC } from 'react';
import { IUser } from 'utils/interfaces';
import * as S from './style';

interface IProps {
  user: IUser;
}

const UserInfo: FC<IProps> = ({ user }) => {
  return (
    <S.Container>
      <h1>{user?.username}</h1>
    </S.Container>
  );
};

export default UserInfo;
