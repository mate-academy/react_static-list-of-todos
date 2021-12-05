import React from 'react';

import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <div className="todoList__content">
      <div className="todoList__info">
        <p className="todoList__info-name">
          Name:
          {' '}
          {user.name}
        </p>
        <p className="todoList__info-email">
          Email:
          {' '}
          {user.email}
        </p>
      </div>
    </div>
  );
};
