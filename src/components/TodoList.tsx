import React from 'react';
import { Todo } from './TodoI';
import { TodoInfo } from './TodoInfo';

type Props = {
  preparedTodos: Todo[];
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => {
  return (
    <ul>
      {preparedTodos.map(todo => (
        <li className="todoList" key={todo.id}>
          <TodoInfo todo={todo} />
        </li>
      ))}
    </ul>
  );
};
