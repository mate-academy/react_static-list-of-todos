/* eslint-disable react/no-unused-prop-types */
import React from 'react';

// Create a `UserInfo` component accepting a `user` object and use it to render
// a `todo.user` in the list with some styling. (Show at least a `name` and an
// `email` of the `user`)
export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

export const UserInfo: React.FC<User> = (user: User) => {
  return (
    <div>
      <h2>{`Name: ${user.name}`}</h2>
      <p data-cy="email">{`E-mail: ${user.email}`}</p>
      <p data-cy="username">{`Username: ${user.username}`}</p>
    </div>
  );
};
