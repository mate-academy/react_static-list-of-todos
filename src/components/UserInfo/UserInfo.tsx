import React from 'react';
import { User } from '../../types';

export const UserInfo: React.FC<User> = ({ name, email }) => (
  <div className="user">
    <div className="user__name">
      {name}
    </div>

    <a className="user__email" href="mailto:{email}">
      {email}
    </a>
  </div>
);
