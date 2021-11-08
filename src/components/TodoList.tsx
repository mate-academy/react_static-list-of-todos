import React from 'react';
import { UserInfo } from './UserInfo';
import { Todo } from '../type/User';

interface Props {
  todo: Todo[],
}

export const TodoList: React.FC<Props> = ({ todo = [] }) => (
  <ul>
    {todo.map(todoUser => (
      <li key={todoUser.id} className="app">
        <UserInfo todo={todoUser} />
        <br />
        {todoUser.completed ? 'Ready' : 'Not ready'}
      </li>
    ))}
  </ul>
);
