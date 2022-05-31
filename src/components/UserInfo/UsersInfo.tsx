import React from 'react';

import { Users } from '../../types/Users';
import './UsersInfo.scss';

interface Props {
  user : Users;
}

export const UserInfo : React.FC<Props> = ({ user }) => (
  <ul className="users">
    <li>
      {`User Name: ${user.name}`}
    </li>
    <li data-cy="username">
      {`User Username: ${user.username}`}
    </li>
    <li data-cy="email">
      {`User email: ${user.email}`}
    </li>
  </ul>
);
