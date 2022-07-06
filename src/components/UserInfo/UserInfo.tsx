import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

type Props = {
  user: User,
};

const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user-info">
    <div data-cy="username">
      {user.name}
    </div>

    <div data-cy="email">
      {user.email}
    </div>
  </div>
);

export default UserInfo;
