import React from 'react';
import { ForPreparedTodos } from '../react-app-env';
import { TodoInfo } from './TodoInfo';
import { UserInfo } from './UserInfo';

type Prop = {
  userTodos: ForPreparedTodos[],
};

export const TodoList: React.FC<Prop> = ({ userTodos }) => (
  <ul>
    {userTodos.map(oneUser => (
      <li>
        <p><UserInfo userItem={oneUser} /></p>
        <p><TodoInfo todoItem={oneUser} /></p>
      </li>
    ))}
  </ul>
);
