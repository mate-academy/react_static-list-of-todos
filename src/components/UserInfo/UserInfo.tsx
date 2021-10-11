import React from 'react';
import { UserTypes } from '../../types/UserTypes';
import './UserInfo.scss';

type Props = {
  user: UserTypes
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user__info">
    <span className="todoList__info">
      <span className="todoList__heading">user:</span>
      <p className="todoList__text">
        {user.name}
        {' '}
        <span className="todoList__email">
          (
          {user.email}
          )
        </span>
      </p>
    </span>
  </div>
);
