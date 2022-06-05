import React from 'react';
import { User } from '../../types/interfaces';

type Props = {
  user: User;
};

const UserInfo: React.FC<Props> = ({ user }) => {
  const { name, email } = user;

  return (
    <>
      <p data-cy="username">
        <strong>Name:</strong>
        {' '}
        {name}
      </p>
      <p data-cy="email">
        <strong>Name:</strong>
        {' '}
        {email}
      </p>
    </>
  );
};

export default UserInfo;
