import React from 'react';
import UserInfo from './UserInfo';
import { PreparedTodo } from '../types';

import './TodoInfo.scss';

const TodoInfo: React.FC<PreparedTodo> = ({ todo, user }) => (
  <div className="todo">
    <h2 className="todo__title">
      {todo.title}
    </h2>
    <div className="todo__status">
      {todo.completed
        ? 'Status: completed'
        : 'Status: not completed'}
    </div>
    {user && (
      <UserInfo {...user} />
    )}
  </div>
);

export default TodoInfo;
