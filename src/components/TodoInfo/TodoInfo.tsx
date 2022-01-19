import React from 'react';
import { UserInfo } from '../UserInfo';

type Props = Omit<PreparedTodo, 'id' | 'userId'>;

export const TodoInfo: React.FC<Props> = ({ title, completed, user }) => (
  <div className="content">
    <h2 className="has-text-centered">{title}</h2>
    <div className="card-footer">
      {completed
        ? <span className="card-footer-item has-text-success">Status: Completed</span>
        : <span className="card-footer-item has-text-info">Status: Not Completed</span>}
      {user
        ? <UserInfo name={user.name} email={user.email} />
        : <b>User is not assigned</b>}
    </div>
  </div>
);
