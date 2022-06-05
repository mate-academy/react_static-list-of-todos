import React from 'react';
import { User } from '../../react-app-env';

interface Props {
  user: User | null;
}

const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="userInfo">
    <p data-cy="username">Name: {user ? user.name : 'Unknown'}</p>
    <p data-cy="email">Email: {user ? user.email : 'Unknown'}</p>
  </div>
);

export default UserInfo;
