import React from 'react';
import { TodoInfo } from './TodoInfo';

type Props = {
  preparedTodos: Todo[];
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul className="todos">
    {preparedTodos.map(element => (
      <li key={element.id} className="todos__list">
        <TodoInfo todo={element} />
      </li>
    ))}
  </ul>
);
