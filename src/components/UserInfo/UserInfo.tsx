import React from 'react';
import { Todo } from '../types/Todo';

export const UserInfo: React.FC<Todo> = ({ ...todos }) => (
  <>
    <div className="todo__name">
      {todos.user?.name}
    </div>
    <div className="todo_mail">
      {todos.user?.email}
    </div>
  </>
);
