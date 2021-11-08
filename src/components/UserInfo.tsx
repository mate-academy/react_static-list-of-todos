import React from 'react';
import { Todos } from '../type/User';
import { TodoInfo } from './TodoInfo';

type UserInfoMember = {
  todo: Todos;
};

export const UserInfo:React.FC<UserInfoMember> = ({ todo }) => (
  <>
    <strong>{todo.title}</strong>
    <br />
    <div className="user-name">
      <TodoInfo user={todo.user} />
    </div>
  </>
);
