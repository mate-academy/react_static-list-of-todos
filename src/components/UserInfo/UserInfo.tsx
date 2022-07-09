import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    {user && (
      <div className="UserInfo">
        <p data-cy="username" className="UserInfo__title">
          {user.name}
        </p>

        <p data-cy="email" className="UserInfo__email">
          {user.email}
        </p>
      </div>
    )}
  </>
);
