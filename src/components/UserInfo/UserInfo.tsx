/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { User } from '../../typedefs';

// Create a `UserInfo` component accepting a `user` object and use it to render
// a `todo.user` in the list with some styling. (Show at least a `name` and an
// `email` of the `user`)
type Props = {
  user: User
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { name, email, username } = user;

  return (
    <div>
      <h2 data-cy="username">{name}</h2>
      <p data-cy="email">{email}</p>
      <p>{username}</p>
    </div>
  );
};
