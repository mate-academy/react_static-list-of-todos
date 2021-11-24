import React from 'react';

import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <div className="TodoList__user-info">
      <div className="TodoList_user-info-content">
        <p className="TodoList__user-name">{user.name}</p>
        <p className="TodoList__user-email">{user.email}</p>
      </div>
    </div>
  );
};
