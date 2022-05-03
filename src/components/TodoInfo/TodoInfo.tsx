import React from 'react';
import { PreparedTodo } from '../../types/PreparedTodo';
import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

// eslint-disable-next-line max-len
export const TodoInfo: React.FC<PreparedTodo> = ({ title, completed, user }) => {
  const status = completed
    ? (
      <span className="todo__status todo__status--done">
        Done
      </span>
    )
    : (
      <span className="todo__status todo__status--undone">
        In Progress
      </span>
    );

  return (
    <div className="todo">
      <h2 className="todo__title">{title}</h2>
      {status}
      {user && <UserInfo {...user} />}
    </div>
  );
};
