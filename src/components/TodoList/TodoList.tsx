import React from 'react';

import { PreparedToDo } from '../../types/PreparedToDo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

type Props = {
  preparedTodos: PreparedToDo[]
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul className="todo__list">
    {preparedTodos.map(preparedTodo => (
      <li key={preparedTodo.id}>
        <TodoInfo preparedTodo={preparedTodo} />
      </li>
    ))}
  </ul>
);
