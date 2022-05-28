import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { PreparedTodo } from '../../react-app-env';

type Props = {
  todo: PreparedTodo
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <h3 data-cy="title">
      {todo.title}
    </h3>

    <p data-cy="status">
      {todo.completed ? 'Completed' : 'Not completed'}
    </p>

    {todo.user && (
      <UserInfo
        name={todo.user.name}
        email={todo.user.email}
      />
    )}
  </>
);
