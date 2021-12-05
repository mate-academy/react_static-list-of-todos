import React from 'react';
import { UserInfo } from './UserInfo';
import { TodoInfo } from './TodoInfo';
import { TodoWithUser } from '../types/TodoWithUser';

export type Props = {
  todosList: TodoWithUser[];
};

export const TodoList: React.FC<Props> = ({ todosList }) => (
  <ul>
    {todosList.map((todo: TodoWithUser) => (
      <li key={todo.id}>
        <TodoInfo
          title={todo.title}
          completed={todo.completed}
        />
        <UserInfo
          name={todo.user?.name}
          email={todo.user?.email}
        />
      </li>
    ))}
  </ul>
);
