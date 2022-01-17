import React from 'react';
import { TodoInfo } from '../TodoInfo';

import './TodoList.scss';

type Props = {
  preparedTodos: Todo[];
};

export const TodoList: React.FC<Props> = ({ preparedTodos = [] }) => (
  <ul className="todo-list">
    {preparedTodos.map(preparedTodo => (
      <li key={preparedTodo.id} className="todo-list-element">
        <TodoInfo
          title={preparedTodo.title}
          completed={preparedTodo.completed}
          user={preparedTodo.user}
        />
      </li>
    ))}
  </ul>
);
