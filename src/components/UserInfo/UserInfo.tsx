import React from 'react';
import './UserInfo.scss';

type Props = {
  user: User | null;
};

export const UserInfo:React.FC<Props> = ({ user }) => {
  return (
    <>
      {user && (
        <div className="user-info-container">
          <span data-cy="username">{user.name}</span>
          <span data-cy="email">{user.email}</span>
        </div>
      )}
    </>
  );
};
