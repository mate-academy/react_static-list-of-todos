import React from 'react';
import { User } from '../../app.typedef';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { name, email } = user;

  return (
    <ul>
      <li data-cy="username">{`Name: ${name}`}</li>
      <li data-cy="email">{`E-mail: ${email}`}</li>
    </ul>
  );
};
