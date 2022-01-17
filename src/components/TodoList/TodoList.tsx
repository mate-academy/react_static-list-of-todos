import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';

import './TodoList.scss';

type Props = {
  preparedTodos: Todo[];
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul className="todo__list">
    {preparedTodos.map(todo => (
      <li key={todo.id} className="todo__item">
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
