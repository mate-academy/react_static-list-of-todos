// Don't forget to import the React library
import React from 'react';
// Create a `UserInfo` component accepting a `user` object and use it to render
// a `todo.user` in the list with some styling. (Show at least a `name` and an
// `email` of the `user`)
type Props = {
  name: string,
  email: string,
};

export const UserInfo: React.FC<Props> = ({ name, email }) => (
  <>
    <p>{name}</p>
    <p>{email}</p>
  </>
);
// Add a default export statement for UserInfo component to use it in the other files
