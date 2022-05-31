import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';

type Props = {
  prepTodos: PreparedTodos[];
};

export const TodoList: React.FC<Props> = ({ prepTodos }) => (
  <ul>
    {prepTodos.map(item => (
      <li>
        <TodoInfo info={item} />
      </li>
    ))}
  </ul>
);
