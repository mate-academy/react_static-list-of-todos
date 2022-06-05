import React from 'react';

type Props = {
  name: string,
  email: string,
};

export const UserInfo: React.FC<Props> = ({ name, email }) => (
  <ul>
    <li data-cy="username">{name}</li>
    <li data-cy="email">{email}</li>
  </ul>
);
