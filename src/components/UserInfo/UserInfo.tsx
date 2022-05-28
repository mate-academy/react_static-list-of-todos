import React from 'react';
import { User } from '../../react-app-env';

interface Props {
  user: User;
}
export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <h3 data-cy="username">
      {user.name}
    </h3>
    <p data-cy="email">
      {`e-mail: ${user.email}`}
    </p>
  </>
);
