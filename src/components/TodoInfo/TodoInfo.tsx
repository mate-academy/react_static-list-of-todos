import React from 'react';
import { PreparedTodo } from '../../types/PreparedTodo';
import { UserInfo } from '../UserInfo';

export const TodoInfo: React.FC<PreparedTodo> = ({ user, title, completed }) => (
  <div>
    {user && <UserInfo {...user} />}

    <p>
      <span className="title text-muted">{title}</span>
    </p>

    <p className={`status badge
      ${completed ? 'bg-success' : 'bg-danger'}`}
    >
      {completed ? 'Completed' : 'No completed'}
    </p>
  </div>
);
