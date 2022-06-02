import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';

import { Props } from '../../types';

export const TodoList: React.FC <Props> = ({ todos }) => (
  <ul className="list container__list">
    {todos.map(todo => (
      <li key={todo.id} className="list__item">
        <TodoInfo {...todo} />
      </li>
    ))}
  </ul>
);
