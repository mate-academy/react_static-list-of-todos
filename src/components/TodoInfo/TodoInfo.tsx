import React from 'react';
import { UserInfo } from '../UserInfo';

export const TodoInfo: React.FC<PreparedTodo> = ({ title, completed, user }) => (
  <div>
    {user && <UserInfo {...user} />}

    <p>
      <span className="title text-muted">{title}</span>
    </p>
    {completed
      ? (<p className="status badge bg-success ">Completed</p>)
      : (<p className="status badge bg-danger">No completed</p>)}
  </div>
);
