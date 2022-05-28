import React from 'react';

import { TodoInfo } from '../TodoInfo/TodoInfo';
import { PreparedTodo } from '../../react-app-env';

import './TodoList.scss';

type Props = {
  preparedTodos: PreparedTodo[]
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul className="list-group">
    {preparedTodos.map(todo => (
      <li
        className="list-group-item
         list-group-item-action
          list-group-item-success"
        key={todo.id}
      >
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
