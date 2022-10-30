import React from 'react';
import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { name, email, id } = user;

  return (
    <>
      <h1 data-cy="username">
        {`Name: ${name}`}
      </h1>

      <div data-cy="email">
        {`Email: ${email}`}
      </div>

      <div data-cy="id">
        {`User: ${id}`}
      </div>
    </>
  );
};
