import React from 'react';

interface Props {
  user: Users,
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div>
    <p>{`Name: ${user.name}`}</p>
    <p data-cy="username">{`User Name: ${user.username}`}</p>
    <p data-cy="email">{`Email: ${user.email}`}</p>
  </div>
);

// Don't forget to import the React library

// Create a `UserInfo` component accepting a `user` object and use it to render
// a `todo.user` in the list with some styling. (Show at least a `name` and an
// `email` of the `user`)

// Add a default export statement for UserInfo component to use it in the other files
