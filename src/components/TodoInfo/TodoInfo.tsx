import React from 'react';
import { PreparedTodo } from '../../types/PreparedTodo';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

export const TodoInfo: React.FC<PreparedTodo> = (todo) => {
  const {
    title,
    completed,
    user,
  } = todo;

  return (
    <div className="TodoInfo">
      <h4>{`Todo name: ${title}`}</h4>
      <span>{completed ? 'Completed' : 'Not completed'}</span>
      <UserInfo name={user.name} email={user.email} />
    </div>
  );
};
