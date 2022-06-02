import React from 'react';
import { UserInfo } from '../UserInfo';
import { PreparedTodo } from '../../types';

interface Props {
  todo: PreparedTodo;
}

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const {
    title,
    completed,
    user,
  } = todo;

  return (
    <div className="todo" data-cy="title">
      <h2>{`Task: ${title}`}</h2>
      <h3 data-cy="status">
        {completed
          ? ('Completed')
          : ('Not completed')}
      </h3>
      {user && (
        <UserInfo user={user} />
      )}
    </div>
  );
};
