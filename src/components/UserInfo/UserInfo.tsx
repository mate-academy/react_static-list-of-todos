import React from 'react';
import { User } from '../../react-app-env';

type Props = {
  user: User;
};

const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <strong>{user.name}</strong>
    <p data-cy="email">{user.email}</p>
  </>
);

export default UserInfo;
