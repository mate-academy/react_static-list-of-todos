import React from 'react';

import { User } from '../../react-app-env';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <div data-cy="username" className="title">{user?.name}</div>
    <div data-cy="email" className="colorBlue">{user?.email}</div>
  </>
);
