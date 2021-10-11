import React from 'react';
import { User } from '../types/User';

type Props = {
  userInfo: User
};

export const UserInfo: React.FC<Props> = ({ userInfo }) => (
  <>
    <span>{userInfo.name}</span>
    <span>{userInfo.email}</span>
  </>
);
