import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { PreparedTodos } from '../../types/preparedTodos';

type Props = {
  todos: PreparedTodos[],
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id}>
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
