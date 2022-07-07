import React from 'react';
import { User } from '../../types/User';

// Create a `UserInfo` component accepting a `user` object and use it to render
// a `todo.user` in the list with some styling. (Show at least a `name` and an
// `email` of the `user`)

type Props = {
  user: User,
};

const UserInfo: React.FC<Props> = ({
  user,
}) => (
  <div>
    <p data-cy="username">{user.name}</p>
    <p data-cy="email">{user.email}</p>
  </div>
);

export default UserInfo;
