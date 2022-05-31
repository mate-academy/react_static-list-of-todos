import React from 'react';
import { PreparedTodo } from '../../types';
import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

interface Props {
  todo: PreparedTodo,
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
          : ('Not Completed')}
      </h3>
      {user && (
        <UserInfo user={user} />)}
    </div>
  );
};
