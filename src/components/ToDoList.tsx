import React from 'react';
import { TodoInfo } from './TodoInfo';
import { UserInfo } from './UserInfo';

import { ToDo } from '../types/ToDo';

import './ToDoList.scss';

type Props = {
  todos: ToDo[]
};

export const ToDoList: React.FC<Props> = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      todo.user
      && (
        <li className="List" key={todo.id}>
          <UserInfo user={todo.user} />
          <TodoInfo todo={todo} />
        </li>
      )
    ))}
  </ul>
);
