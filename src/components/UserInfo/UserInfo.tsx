// Don't forget to import the React library

// Create a `UserInfo` component accepting a `user` object and use it to render
// a `todo.user` in the list with some styling. (Show at least a `name` and an
// `email` of the `user`)

// Add a default export statement for UserInfo component to use it in the other files

import React from 'react';

import { User } from '../../react-app-env';

interface Props {
  user: User;
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <ul className="user">
    <li>
      {`User Name: ${user.name}`}
    </li>
    <li data-cy="username">
      {`User userName: ${user.username}`}
    </li>
    <li data-cy="email">
      {`User email: ${user.email}`}
    </li>
  </ul>
);
