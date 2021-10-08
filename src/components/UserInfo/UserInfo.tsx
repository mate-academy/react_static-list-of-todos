import React from 'react';
import { UserTypes } from '../../types/UserTypes';

type Props = {
  user: UserTypes
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <span className="todoList__userInfo">
      {user.name}
    </span>
    <span className="todoList__userInfo">
      {user.email}
    </span>
  </>
);
