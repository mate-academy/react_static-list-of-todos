import React from 'react';

export interface User {
  name: string,
  username: string
  email: string,
}

type Props = {
  user: User;
};

export const UserInfo:React.FC<Props> = ({ user }) => (
  <>
    <div className="Name" data-cy="username">{user.name}</div>
    <div className="UserName" data-cy="username">{user.username}</div>
    <div className="Email" data-cy="email">{user.email}</div>
  </>
);
