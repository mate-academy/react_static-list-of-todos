import React from 'react';
import './TodoList.scss';

import { PreparedTodo } from '../../Types/preparedTodos';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  preparedTodos: PreparedTodo[];
};

export const TodoList: React.FC<Props> = ({ preparedTodos = [] }) => (

  <ul className="todo__list">
    {preparedTodos.map((todo) => (
      <li className="todo__item" key={todo.id}>
        <UserInfo todo={todo} />
      </li>
    ))}
  </ul>
);
