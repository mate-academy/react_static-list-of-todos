import React from 'react';
import { PrepareToDos } from '../../react-app-env';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: PrepareToDos,
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <h2 data-cy="title">
      {`Title: ${todo.title}`}
    </h2>

    <p data-cy="status">
      {`Status: ${todo.completed
        ? 'Completed'
        : 'Not completed'}`}
    </p>

    {todo.user && (
      <UserInfo
        name={todo.user.name}
        email={todo.user.email}
      />
    )}
  </>
);
