import React from 'react';
import { UserInfo } from './UserInfo';
import { Todos } from '../type/User';

type TodoListMember = {
  todo: Todos[],
};

export const TodoList: React.FC<TodoListMember> = ({ todo = [] }) => (
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
