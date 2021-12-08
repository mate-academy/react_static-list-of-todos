import React from 'react';
import { User } from '../../Types/User';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <div className="todoList_user">
      <div className="todoList_name">
        {'Name: '}
        {user.name}
      </div>
      <div className="todoList_email">
        {'Email: '}
        {user.email}
      </div>
    </div>
  );
};
