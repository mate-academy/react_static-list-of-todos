import React from 'react';

export interface UserInfoProps {
  user: User
}

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => (
  <>
    <h2 data-cy="username">{user.name}</h2>
    <a
      href={user.website}
      data-cy="email"
      className="list-link"
    >
      {user.email}
    </a>
  </>
);
