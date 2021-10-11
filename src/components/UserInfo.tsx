import React from 'react';
import { Todo } from '../types/types';

export const UserInfo: React.FC<Todo> = ({ ...todo }) => (
  <>
    <div className="todo__name">
      {todo.user?.name}
    </div>
    <div className="todo__email">
      {todo.user?.email}
    </div>
  </>
);
