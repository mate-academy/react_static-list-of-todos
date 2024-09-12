import React from 'react';
import { Todo } from '../../types/Todo';

// Add the required types and props
export const UserInfo: React.FC<{ todo: Todo }> = ({ todo }) => {
  return (
    <a className="UserInfo" href={`mailto:${todo.user?.email}`}>
      {todo.user?.name}
    </a>
  );
};
