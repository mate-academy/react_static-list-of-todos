import React from 'react';
import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo:React.FC<Props> = ({ user }) => (
  <>
    <span data-cy="username">
      {user.name}
    </span>
    <br />
    <span data-cy="email">
      {user.email}
    </span>
    <br />
  </>
);
