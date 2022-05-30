import React from 'react';

type Props = {
  name: string | null,
  email: string | null,
};

const UserInfo: React.FC<Props> = ({ name, email }) => (
  <React.Fragment data-cy="username">
    <h2>{name}</h2>
    <p data-cy="email">{email}</p>
  </React.Fragment>
);

export default UserInfo;
