import React, { FC } from 'react';
import { IUser } from 'utils/interfaces';
import * as S from './style';

import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineHome,
  AiOutlinePhone,
} from 'react-icons/ai';

interface IProps {
  user: IUser;
}

const UserInfo: FC<IProps> = ({ user }) => {
  return (
    <S.Container>
      {user ? (
        <>
          <h2>User Profile:</h2>

          <S.CenterContent>
            <S.Row>
              <AiOutlineUser />
              <S.InfoText>{user.username}</S.InfoText>
            </S.Row>
            <S.Row>
              <AiOutlineMail />
              <S.InfoText>{user.email}</S.InfoText>
            </S.Row>
            <S.Row>
              <AiOutlinePhone />
              <S.InfoText>{user.phone}</S.InfoText>
            </S.Row>
            <S.Row>
              <AiOutlineHome />
              <S.InfoText>{user.address.street}, </S.InfoText>
              <S.InfoText>{user.address.suite}, </S.InfoText>
              <S.InfoText>{user.address.zipcode}</S.InfoText>
            </S.Row>
            <S.Row>
              <AiOutlineHome />
              <S.InfoText>Lat: {user.address.geo.lat}</S.InfoText>
              <S.InfoText>Lng: {user.address.geo.lng}</S.InfoText>
            </S.Row>
          </S.CenterContent>
        </>
      ) : (
        <h1>Please select a user</h1>
      )}
    </S.Container>
  );
};

export default UserInfo;
