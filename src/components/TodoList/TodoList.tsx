import React from 'react';

import { PrepTodo } from '../../types';

import { TodoInfo } from '../TodoInfo';

interface Props {
  preparedTodos: PrepTodo[]
}

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul>
    {preparedTodos.map((preparedTodo) => (
      <li key={preparedTodo.id}>
        <TodoInfo
          todo={preparedTodo}
        />
        <p>{preparedTodo.id}</p>
      </li>
    ))}
  </ul>
);
