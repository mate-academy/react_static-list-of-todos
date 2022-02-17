import React from 'react';

import { PreparedTodos } from '../../types/preparedTodos';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todo: PreparedTodos,
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <h2>{todo.title}</h2>
    <p>
      {todo.completed
        ? 'Status: completed'
        : 'Status: not completed'}
    </p>
    {todo.user && <UserInfo user={todo.user} />}
  </>
);
