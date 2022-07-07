import React from 'react';
import { User } from '../../types/User';

// Create a `UserInfo` component accepting a `user` object and use it to render
// a `todo.user` in the list with some styling. (Show at least a `name` and an
// `email` of the `user`)

// Add a default export statement for UserInfo component to use it in the other files

type Prop = {
  user: User | null,
};

export const UserInfo: React.FC<Prop> = ({ user }) => (
  <>
    { user && (
      <>
        <div>{user.username}</div>
        <div data-cy="username">{user.name}</div>
        <div data-cy="email">{user.email}</div>
      </>
    )}
  </>
);
