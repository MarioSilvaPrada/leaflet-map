import React, { FC } from 'react';
import { IUser } from 'utils/interfaces';
import * as S from './style';

interface IProps {
  user: IUser;
  onClick: () => void;
}
const UserCard: FC<IProps> = ({ user, onClick }) => {
  return (
    <S.CardsWrapper onClick={onClick}>
      <p>{user?.username}</p>
    </S.CardsWrapper>
  );
};

export default UserCard;
