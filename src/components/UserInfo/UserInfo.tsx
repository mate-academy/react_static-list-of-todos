import React from 'react';
import { User } from '../../react-app-env';
import './UserInfo.scss';

type Props = {
  user: User;
};

const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user">
    <strong data-cy="username">{user.name}</strong>
    <p data-cy="email">{user.email}</p>
  </div>
);

export default UserInfo;
