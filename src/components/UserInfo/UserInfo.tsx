import React from 'react';
import { Users } from '../../types/Users';
import './UserInfo.scss';

type Props = {
  user: Users | null
};

export const UserInfo: React.FC<Props | null> = ({ user }) => (
  <>
    {user && (
      <div className="card__user-info">
        <p className="user-info__name">
          {user.name}
        </p>
        <p className="user-info__email">
          {user.email}
        </p>
      </div>
    )}
  </>
);
