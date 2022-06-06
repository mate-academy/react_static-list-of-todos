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
    <div className="todo">
      <h2 data-cy="title">{`Task: ${title}`}</h2>
      <h3 date-cy="status">
        {completed
          ? ('Complated')
          : ('Not complated')}
      </h3>
      {user && (
        <UserInfo user={user} />
      )}
    </div>
  );
};
