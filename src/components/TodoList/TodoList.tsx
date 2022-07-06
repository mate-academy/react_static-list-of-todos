import React from 'react';

import './TodoList.scss';

import { TodoInfo } from '../TodoInfo';

import Todo from '../../types/Todo';

type Props = {
  preparedTodos: Todo[];
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul className="TodoList">
    {preparedTodos.map((todo) => (
      <li className="TodoList__item" key={todo.id}>
        <TodoInfo
          title={todo.title}
          completed={todo.completed}
          user={todo.user}
        />
      </li>
    ))}
  </ul>
);
