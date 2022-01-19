import React from 'react';
import { TodoInfo } from './TodoInfo';

import './Todos.scss';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="todo">
    {todos.map(todo => (
      <li key={todo.id} className="todo__list">
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
