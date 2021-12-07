import React from 'react';
import './TodoList.scss';

import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

type Props = {
  preparedTodos: Todo[];
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul className="todo">
    {preparedTodos.map(todo => (
      <li key={todo.id} className="todo__item">
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
