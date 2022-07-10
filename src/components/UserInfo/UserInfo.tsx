import React from 'react';
import { User } from '../../react-app-env';

type Props = {
  user: User | null,
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <>
      <div className="userInfo" data-cy="username">
        <b>Name: </b>
        {user.name}
      </div>
      <div className="userInfo" data-cy="email">
        <b>Email: </b>
        <a href={`mailto: ${user.email}`}>{user.email}</a>
      </div>
    </>
  );
};
