import React, { FC } from 'react';
import { IUser } from 'utils/interfaces';
import * as S from './style';

interface IProps {
  user: IUser;
  onClick: () => void;
  isSelected: boolean;
}
const UserCard: FC<IProps> = ({ user, onClick, isSelected }) => {
  return (
    <S.CardsWrapper onClick={onClick} isSelected={isSelected}>
      <p>{user?.username}</p>
    </S.CardsWrapper>
  );
};

export default UserCard;
