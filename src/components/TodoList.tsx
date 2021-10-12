import React from 'react';
import { Todo } from '../types/Todo';
import { TodoInfo } from './TodoInfo';

export const TodoList: React.FC<{ preparedTodos: Todo[] }> = ({ preparedTodos }) => (
  <ul>
    {preparedTodos.map(todo => (
      <li key={todo.id}>
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
