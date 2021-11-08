import React from 'react';
import { User } from '../../types';
import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { name, email } = user;

  return (
    <div className="userInfo">
      <p>{name}</p>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  );
};
