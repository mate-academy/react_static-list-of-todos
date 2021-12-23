import React from 'react';
import { User } from '../types/User';

import './UserInfo.scss';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <ul className="list">
      <li className="listItem">
        Name:
        {' '}
        <span>{`${user.name}`}</span>
      </li>
      <li className="listItem">
        Email:
        {' '}
        <span>{`${user.email}`}</span>
      </li>
      <li className="listItem">
        Phone:
        {' '}
        <span>{`${user.phone}`}</span>
      </li>
      <li className="listItem">
        Personal website:
        {' '}
        <span>{`${user.website}`}</span>
      </li>
    </ul>
  </>
);
