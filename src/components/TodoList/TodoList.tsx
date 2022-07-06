import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { MergeTodosUsers } from '../../type/types';

import './TodoList.scss';

type Props = {
  todoList: MergeTodosUsers[];
};

export const TodoList: React.FC<Props> = ({ todoList = [] }) => (
  <ul>
    {todoList.map(todo => (
      <li
        key={todo.id}
        className="todoInfo"
      >
        <TodoInfo
          title={todo.title}
          completed={todo.completed}
          user={todo.user}
        />
      </li>
    ))}
  </ul>
);
