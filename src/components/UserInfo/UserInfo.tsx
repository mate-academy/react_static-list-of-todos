import React from 'react';
import './UserInfo.scss';
import { User } from '../../types/User';

type Prop = {
  user: User;
};

export const UserInfo: React.FC<Prop> = ({ user }) => {
  return (
    <>
      <p className="user__name">{`Name: ${user.name}`}</p>
      <p className="user__mail">{user.email}</p>
    </>
  );
};
