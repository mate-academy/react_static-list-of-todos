// Don't forget to import the React library
import React from 'react';
import { User } from '../../react-app-env';
// Create a `UserInfo` component accepting a `user` object and use it to render
// a `todo.user` in the list with some styling. (Show at least a `name` and an
// `email` of the `user`)
interface Props {
  user: User,
}
// Add a default export statement for UserInfo component to use it in the other files
export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <>
      <p data-cy="username">{`Name: ${user.name}`}</p>
      <p data-cy="email">{`e-mail: ${user.email}`}</p>
    </>
  );
};
