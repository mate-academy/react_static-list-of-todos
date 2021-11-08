import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { PreparedTodo } from '../../type/type';
import './TodoInfo.scss';

interface Props {
  todo: PreparedTodo;
}

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const { title, completed, user } = todo;

  return (
    <li className="todo-info">
      <p>{title}</p>
      <p>{completed ? '✅' : '❌'}</p>
      <p>{user ? <UserInfo user={user} /> : null}</p>
    </li>
  );
};
