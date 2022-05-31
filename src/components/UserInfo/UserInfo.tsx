import React from 'react';

type Props = {
  user: {
    name: string,
    email: string,
  }
};

const UserInfo: React.FC<Props> = ({ user }) => (
  <React.Fragment data-cy="username">
    <h2>{user.name}</h2>
    <p data-cy="email">{user.email}</p>
  </React.Fragment>
);

export default UserInfo;
