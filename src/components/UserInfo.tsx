import React from 'react';
import { Todos } from '../type/User';
import { TodoInfo } from './TodoInfo';

type UserInfoMember = {
  user: Todos;
};

export const UserInfo:React.FC<UserInfoMember> = ({ user }) => (
  <>
    <strong>{user.title}</strong>
    <br />
    <div className="user-name">
      <TodoInfo todo={user.user} />
    </div>
  </>
);
