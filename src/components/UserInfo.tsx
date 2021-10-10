import React from 'react';
import { User } from '../types/user';

type Props = {
  user: User
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
