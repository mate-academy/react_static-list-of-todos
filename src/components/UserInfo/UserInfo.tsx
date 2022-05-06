import React from 'react';
import { User } from '../../types/interfaces';
import './UserInfo.scss';

type Props = {
  user: User | null,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <ul className="user-info">
    <li>
      {user && `Name: ${user.name}`}
    </li>
    <li>
      {user && `Email: ${user.email}`}
    </li>
    <li>
      {user && `Phone: ${user.phone}`}
    </li>
  </ul>
);
