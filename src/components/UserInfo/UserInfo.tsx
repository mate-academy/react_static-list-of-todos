import React from 'react';
import './UserInfo.scss';
import { User } from '../../react-app-env';

interface Props {
  user: User,
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user">
    <h4 className="user__title">Information about user</h4>
    <ul className="user__list">
      <li className="user__item" data-cy="username">
        {`Name: ${user.name}`}
      </li>
      <li className="user__item" data-cy="email">
        {`Email: ${user.email}`}
      </li>
    </ul>
  </div>
);
