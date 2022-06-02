import React from 'react';
import { PreparedTodo } from '../../types';
import { UserInfo } from '../UserInfo';

interface Props {
  todo: PreparedTodo,
}

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <div className="todo">
    <h2 data-cy="title">{todo.title}</h2>
    <h3 className="todos__status" data-cy="status">
      {todo.completed ? 'Completed!' : 'Not completed!'}
    </h3>
    {todo.user && (
      <UserInfo user={todo.user} />)}
  </div>
);
