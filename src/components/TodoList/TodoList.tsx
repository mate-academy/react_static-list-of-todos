import React from 'react';
import { PrepTodo } from '../../types';
import { TodoInfo } from '../TodoInfo';

import './styleTodoList.scss';

interface Props {
  preparedTodos: PrepTodo[]
}

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul className="list">
    {preparedTodos.map((preparedTodo) => (
      <li key={preparedTodo.id}>
        <TodoInfo
          todo={preparedTodo}
        />
      </li>
    ))}
  </ul>
);
