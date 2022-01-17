import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

export const TodoInfo:React.FC<Todo> = ({
  title,
  completed,
  user,
}) => (
  <>
    <h2 className="todo__title">{title}</h2>
    {completed ? (
      <h3 className="todo__condition-true">Is completed</h3>
    ) : (
      <h3 className="todo__condition-false">Is not completed</h3>
    )}
    {user && <UserInfo {...user} />}
  </>
);
