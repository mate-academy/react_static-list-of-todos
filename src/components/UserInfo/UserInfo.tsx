// Don't forget to import the React library

// Create a `UserInfo` component accepting a `user` object and use it to render
// a `todo.user` in the list with some styling. (Show at least a `name` and an
// `email` of the `user`)

// Add a default export statement for UserInfo component to use it in the other files
import React from 'react';
import { User } from '../Types/types';

type Props = {
  user: User
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    {`Name: ${user.name}`}
    <br />
    {`Email: ${user.email}`}
  </>
);
