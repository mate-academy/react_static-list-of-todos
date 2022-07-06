import React from 'react';
import { User } from '../../types/user';
import './userInfo.css';

type Props = {
  user: User | null,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <ul className="todoUser list">
    {user && (
      <>
        <p className="userName" data-cy="username">
          {user.name}
        </p>

        <p className="userEmail" data-cy="email">
          {user.email}
        </p>
      </>
    )}
  </ul>
);
