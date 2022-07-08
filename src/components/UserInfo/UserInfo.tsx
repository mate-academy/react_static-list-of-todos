import React from 'react';
import './UserInfo.scss';

import { User } from '../../types/User';

export const UserInfo: React.FC<User> = ({ name, email }) => (
  <div className="UserInfo">
    <div className="UserInfo__name" data-cy="username">
      {'Name: '}
      {name}
    </div>
    <div data-cy="email">
      {'Email: '}
      {email}
    </div>
  </div>
);
