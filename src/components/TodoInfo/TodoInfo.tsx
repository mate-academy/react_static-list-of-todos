import React from 'react';
import { PreparedTodo } from '../../types';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: PreparedTodo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const {
    title,
    completed,
    user,
  } = todo;

  return (
    <div>
      <h2>{`Task: ${title}`}</h2>
      <p>
        {completed
          ? ('Completed')
          : ('Not Completed')}
      </p>
      {user && (
        <UserInfo user={user} />
      )}
    </div>
  );
};
