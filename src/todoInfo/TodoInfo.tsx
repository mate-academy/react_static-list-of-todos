import React from 'react';
import { UserInfo } from '../userinfo/UserInfo';
import './TodoInfo.scss';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    {todo.user && (<UserInfo {...todo.user} />)}
    <br />
    <span className="todo">{`Todo: ${todo.title}`}</span>
    <br />
    {todo.completed
      ? <span className="todo_completed--true">Complete</span>
      : <span className="todo_completed--false">Not completed</span>}
  </>
);
