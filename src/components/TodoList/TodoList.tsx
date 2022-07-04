import React from 'react';
import { PreparedToDo } from '../../types/preparedTodo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  preparedTodos: PreparedToDo[]
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => {
  return (
    <ul>
      {preparedTodos.map(preparedTodo => (
        <li key={preparedTodo.id}>
          <TodoInfo preparedToDo={preparedTodo} />
        </li>
      ))}
    </ul>
  );
};
