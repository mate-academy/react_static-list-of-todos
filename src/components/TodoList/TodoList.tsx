import React from 'react';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { PreparedTodos } from '../../types/preparedTodos';

type Props = {
  users: PreparedTodos[],
};

export const TodoList: React.FC<Props> = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.id}>
        <TodoInfo user={user} />
      </li>
    ))}
  </ul>
);
