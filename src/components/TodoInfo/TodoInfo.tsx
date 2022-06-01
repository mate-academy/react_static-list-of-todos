import React from 'react';
import { PreparedTodos } from '../../react-app-env';
import { UserInfo } from '../UserInfo/UserInfo';

interface Props {
  todo :PreparedTodos,
}

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <div className="todo">
    <h2 data-cy="title">{todo.title}</h2>
    <h3 className="todos__status" data-cy="status">
      {todo.completed ? 'Completed!' : 'Not completed!'}
    </h3>
    {todo.user && (
      <UserInfo user={todo.user} />
    )}
  </div>
);
