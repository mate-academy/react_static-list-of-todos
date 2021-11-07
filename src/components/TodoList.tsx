import React from 'react';
import { UserInfo } from './UserInfo';
import { Todos } from '../type/User';

type TodoListMember = {
  member: Todos[],
};

export const TodoList: React.FC<TodoListMember> = ({ member = [] }) => (
  <ul>
    {member.map(todoUser => (
      <li key={todoUser.id} className="app">
        <UserInfo user={todoUser} />
        <br />
        {todoUser.completed ? 'Ready' : 'Not ready'}
      </li>
    ))}
  </ul>
);
