import React from 'react';

import { TodoInfo } from './TodoInfo';
import { UserInfo } from './UserInfo';

import { Todo } from '../types/Todo';

type Props = {
  preparedTodos: Todo[]
};

export const TodoList: React.FC<Props> = ({ preparedTodos }) => (
  <ul>
    {preparedTodos.map(todo => (
      <li key={todo.id}>
        <UserInfo user={todo.user} />
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
