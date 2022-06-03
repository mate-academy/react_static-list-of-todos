import React from 'react';

import { TodoInfo } from '../TodoInfo/TodoInfo';

import { Todos } from '../../react-app-env';

type Props = {
  preparedTodos: Todos[];
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul>
    {preparedTodos.map(todo => (
      <li className="card">
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
