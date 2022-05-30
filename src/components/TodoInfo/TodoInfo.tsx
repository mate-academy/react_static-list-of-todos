import React from 'react';
import { PrepareTodos } from '../../react-app-env';
import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

interface Props {
  todo: PrepareTodos,
}

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <div className="todos__card">
    <h3 className="todos__title" data-cy="title">
      {`Task: ${todo.title}`}
    </h3>
    <p className="todos__status" data-cy="status">
      {todo.completed ? 'Completed' : 'Not completed'}
    </p>
    {todo.user && (
      <UserInfo user={todo.user} />
    )}
  </div>
);

// Create a `TodoInfo` component accepting a `todo` object and use it in the
// list to render `title`, `completed` status and `User`

// Add a default export statement for TodoInfo component to use it in the other files
