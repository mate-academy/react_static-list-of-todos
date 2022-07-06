import React from 'react';

import { User } from '../../types/User';

type Props = {
  user: User | null
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <h4 data-cy="username">{user?.name}</h4>
    <a href={user?.email} data-cy="email">{user?.email}</a>
  </>
);
