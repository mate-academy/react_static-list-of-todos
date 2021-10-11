import React from 'react';
import { UserTypes } from '../../types/UserTypes';

type Props = {
  user: UserTypes;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <div className="todoList__info">
      {user.name}
    </div>
    <div className="todoList__info">
      {user.email}
    </div>
  </>
);
