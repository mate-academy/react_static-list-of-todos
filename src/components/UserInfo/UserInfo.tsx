import React from 'react';

interface User {
  name: string,
  email: string,
}

type Props = {
  user: User | null
};

const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    {user && (
      <>
        <h2 data-cy="username">{user.name}</h2>
        <h3
          className="list__mail"
          data-cy="email"
        >
          {user.email}
        </h3>
      </>
    )}
  </>
);

export default UserInfo;
