import React from 'react';
import { User } from '../../react-app-env';

type Props = {
  user: User | null,
};

const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    {user && (
      <React.Fragment data-cy="username">
        <h2>{user.name}</h2>
        <p data-cy="email">{user.email}</p>
      </React.Fragment>
    )}
  </>
);

export default UserInfo;
