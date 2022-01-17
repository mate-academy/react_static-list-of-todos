import React from 'react';

import { TodoInfo } from './TodoInfo';

type Props = {
  todoItems: PreparedTodos[];
};

export const TodoList: React.FC<Props> = ({ todoItems }) => (
  <ul className="app__list">
    {
      todoItems.map(item => (
        <li className="app__item" key={item.id}>
          <TodoInfo {...item} />
        </li>
      ))
    }
  </ul>
);
