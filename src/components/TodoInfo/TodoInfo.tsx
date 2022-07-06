import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { PreparedTodo } from '../../types/PreparedTodos';

type Props = {
  preparedTodo: PreparedTodo;
};

export const TodoInfo: React.FC<Props> = ({ preparedTodo }) => {
  return (
    <div className="notification is-info">
      <h3 data-cy="email" className="blockTitle title is-3">
        {preparedTodo.title}
      </h3>

      {preparedTodo.completed
        ? (
          <span
            className="notification is-success"
            data-cy="status"
          >
            completed
          </span>
        )
        : (
          <span
            className="notification is-warning"
            data-cy="status"
          >
            progressing
          </span>
        )}

      <UserInfo user={preparedTodo.user}>
        {preparedTodo.user ? '' : 'Unknown'}
      </UserInfo>
    </div>
  );
};
