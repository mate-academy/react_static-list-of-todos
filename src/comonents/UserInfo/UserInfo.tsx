import React from 'react';
import { User } from '../../types/User';

interface Props {
  user: User
}

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { name, username, email } = user;

  return (
    <>
      <div className="card__name">
        {name}
      </div>
      <div className="card__username">
        {username}
      </div>
      <div className="card__email">
        {email}
      </div>
    </>
  );
};
