import React from 'react';

interface User {
  name: string;
  email: string;
}

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props | null> = ({ user }) => (
  <>
    {user && (
      <>
        <h2 data-cy="username">{user.name}</h2>
        <h3 data-cy="email">{user.email}</h3>
      </>
    )}

  </>
);
