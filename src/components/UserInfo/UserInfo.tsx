import React from 'react';
import { User } from '../../react-app-env';

interface Props {
  user: User,
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <ul>
    <li data-cy="username">{user.name}</li>
    <li data-cy="email">{user.email}</li>
  </ul>
);

// Create a `UserInfo` component accepting a `user` object and use it to render
// a `todo.user` in the list with some styling. (Show at least a `name` and an
// `email` of the `user`)

// Add a default export statement for UserInfo component to use it in the other files
