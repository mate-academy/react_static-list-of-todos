import React from 'react';
import { TodoInfo } from './TodoInfo';
import { UserInfo } from './UserInfo';
import { ToDo } from '../types/types';
import './ToDoList.scss';

type Props = {
  todos: ToDo[]
};

export const ToDoList: React.FC<Props> = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li className="List" key={todo.id}>
        { todo.user && <UserInfo user={todo.user} />}
        { todo.user && <TodoInfo todo={todo} />}
      </li>
    ))}
  </ul>
);
