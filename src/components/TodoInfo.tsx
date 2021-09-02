import React from 'react';
import { UserInfo } from './UserInfo';
import './style/TodoInfo.scss';

export const TodoInfo: React.FC<Todo> = ({ title, completed, user }) => (
  <>
    <div className="todo-info">
      <UserInfo {...user} />
      <h1>{title}</h1>
      <p>
        <strong>Status:</strong>
        {' '}
        {completed ? 'has been completed' : 'not complete'}
      </p>
    </div>
  </>
);
