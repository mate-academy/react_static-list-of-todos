import React from 'react';
import { UserRef } from '../../types';
import './UserInfo.scss';

type Props = {
  user: UserRef;
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
