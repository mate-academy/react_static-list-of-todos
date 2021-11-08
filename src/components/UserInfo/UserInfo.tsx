import React from 'react';
import { User } from '../../type/type';
import './UserInfo.scss';

interface Props {
  user: User,
}

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { name, email } = user;

  return (
    <div className="user-info">
      <span>{`Name: ${name}`}</span>
      <br />
      <span>{`Email: ${email}`}</span>
    </div>
  );
};
