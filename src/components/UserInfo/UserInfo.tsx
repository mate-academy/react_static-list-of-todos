import React from 'react';
import './UserInfo.scss';

import { User } from '../../types/User';

export const UserInfo: React.FC<User> = ({ name, email }) => (
  <div className="UserInfo">
    <span className="UserInfo__name">
      {'Name: '}
      {name}
    </span>
    <span>
      {'Email: '}
      {email}
    </span>
  </div>
);
