import React from 'react';
import { PreparedTodo } from '../../types';
import { UserInfo } from '../UserInfo';

interface Props {
  todo: PreparedTodo,
}

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  return (
    <div className="todo" data-cy="title">
      <h2>{todo.title}</h2>
      <h3 data-cy="status">
        {todo.completed
          ? ('Completed')
          : ('Not completed!')}
      </h3>
      {todo.user && (
        <UserInfo user={todo.user} />)}
    </div>
  );
};
