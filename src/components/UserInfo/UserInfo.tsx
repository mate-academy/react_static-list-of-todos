import React from 'react';
import { User } from '../../interfaces/User';
import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <div className="user">
      <p className="userParagraph">{`Name: ${user.name}`}</p>
      <p className="userParagraph">{`Email: ${user.email}`}</p>
    </div>
  );
};
