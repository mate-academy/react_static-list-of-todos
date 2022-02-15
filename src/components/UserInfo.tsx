import React from 'react';

import { User } from '../types';

type Props = {
  user: User
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div>
    <div>{user.name}</div>

    <div>
      <a href={`mailto: ${user.email}`}>
        {user.email}
      </a>
    </div>
  </div>
);
