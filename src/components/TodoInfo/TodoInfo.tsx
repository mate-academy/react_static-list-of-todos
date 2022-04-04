import React from 'react';
import './TodoInfo.scss';
import { UserInfo } from '../UserInfo';
import { Todo } from '../types';

type Props = Todo;

export const TodoInfo: React.FC<Props> = ({
  title,
  completed,
  user,
}) => (
  <div className="todo">
    <div className={`todo__info ${completed === false ? 'todo__info--false' : 'todo__info--true'}`}>
      <div className="todo__title">{title}</div>
      <div className="todo__completed">
        {`Completed: ${String(completed)}`}
      </div>
    </div>
    {user && <UserInfo {...user} />}
  </div>
);
