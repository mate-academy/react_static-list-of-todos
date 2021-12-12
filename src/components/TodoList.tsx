import React from 'react';
import { TodoInfo } from './TodoInfo';
import { Todo } from './types/Todo';

type Props = {
  preparedTodos: Todo[];
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul>
    {preparedTodos.map(todo => (
      <li className="todoList" key={todo.id}>
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
