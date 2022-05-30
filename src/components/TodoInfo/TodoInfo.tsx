import React from 'react';
import { PrepareTodos } from '../../react-app-env';
import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

interface Props {
  todo: PrepareTodos,
}

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <div className="todos">
    <ul>
      <strong>{`Todo ${todo.id}`}</strong>
      <li data-cy="title">{todo.title}</li>
      <li data-cy="status">{`${todo.completed}`}</li>
      {todo.user && (
        <UserInfo user={todo.user} />
      )}
    </ul>
  </div>
);

// Create a `TodoInfo` component accepting a `todo` object and use it in the
// list to render `title`, `completed` status and `User`

// Add a default export statement for TodoInfo component to use it in the other files
