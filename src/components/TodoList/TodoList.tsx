import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
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
        <UserInfo
          name={todo.user?.name || 'user not found'}
          email={todo.user?.email || 'user not found'}
        />
        <TodoInfo
          title={todo.title}
          completed={todo.completed}
          phone={todo.user?.phone || 'user not found'}
        />
      </li>
    ))}
  </ul>
);
