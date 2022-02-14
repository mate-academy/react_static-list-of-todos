import React from 'react';
import './UserInfo.scss';

import { PreparedTodo } from '../../Types/preparedTodos';

type Props = {
  todo: PreparedTodo;
};

export const UserInfo:React.FC<Props> = ({ todo }) => (
  <div className="todo__wrap">
    <p>{todo.title}</p>
    <p>
      {
        todo.completed
          ? 'Competed'
          : 'In Process'
      }
    </p>
    <p>{todo.user?.name}</p>
    <p>{todo.user?.email}</p>
  </div>
);
