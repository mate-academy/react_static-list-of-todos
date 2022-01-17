import React from 'react';
import { User } from '../../types/User';

type Props = {
  user: User
};

export const UserInfo:React.FC<Props> = ({ user }) => (
  <div className="todo-user">
    <div className="todo-user--info">{user.name}</div>
    <div className="todo-user--info">{user.email}</div>
  </div>
);
