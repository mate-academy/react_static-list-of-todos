import React from 'react';
import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

type Props = Omit<PreparedTodo, 'id' | 'userId'>;

export const TodoInfo: React.FC<Props> = ({ title, completed, user }) => (
  <div className="content">
    <h2 className="title">{title}</h2>
    <div className="card-footer">
      {completed
        ? <span className="card-footer-item complete">Status: Completed</span>
        : <span className="card-footer-item not-complete">Status: Not Completed</span>}
      {user
        ? <UserInfo name={user.name} email={user.email} />
        : <b>User is not assigned</b>}
    </div>
  </div>
);
