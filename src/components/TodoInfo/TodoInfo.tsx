import React from 'react';
import './TodoInfo.scss';
import { FullTodo } from '../../react-app-env';
import { UserInfo } from '../UserInfo/UserInfo';

interface Props {
  fullTodo: FullTodo,
}

export const TodoInfo: React.FC<Props> = ({ fullTodo }) => (
  <div className="todo-card">
    <h3 className="todo-card__title">
      {`Task: ${fullTodo.title}`}
    </h3>
    <p className="todo-card__status">
      Status:
      {fullTodo.completed ? ' completed' : ' not completed'}
    </p>
    {fullTodo.user && <UserInfo user={fullTodo.user} />}
  </div>
);
