import React from 'react';
import './TodoInfo.scss';

import { PreparedTodo } from '../../Types/preparedTodos';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todo: PreparedTodo;
};

export const TodoInfo:React.FC<Props> = ({ todo }) => (
  <div className="todo__wrap">
    <p>{todo.title}</p>
    <p>
      {
        todo.completed
          ? 'Competed'
          : 'In Process'
      }
    </p>
    {todo.user && <UserInfo {...todo.user} />}
  </div>
);
