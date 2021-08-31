import React from 'react';
import './UserInfo.scss';
import { User } from '../../types/User';

type Props = {
  user: User | null,
};

const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <div className="user-info">
      {user
        ? (`Name: ${user.name}`) : null }
      <br />
      {user
        ? (`Email: ${user.email}`) : null }
    </div>
  );
};

export default UserInfo;
