import React from 'react';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: PreparedTodo;
};

export const TodoInfo: React.FC<Props> = ({ todo: { title, completed, user } }) => (
  <div className="content">
    <h2 className="has-text-centered">{title}</h2>
    <div className="card-footer">
      {completed
        ? <span className="card-footer-item has-text-success">Status: Completed</span>
        : <span className="card-footer-item has-text-info">Status: Not Completed</span>}
      {user
        ? <UserInfo user={user} />
        : <b>User is not assigned</b>}
    </div>
  </div>
);
