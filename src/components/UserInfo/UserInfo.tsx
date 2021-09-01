import React from 'react';
import './UserInfo.scss';
import { User } from '../../types/User';

type Props = {
  user: User;
};

const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <div className="user-info">
      {user && (
        `Name: ${user.name}`
      )}
      <br />
      {user && (
        `Email: ${user.email}`
      )}
    </div>
  );
};

export default UserInfo;
