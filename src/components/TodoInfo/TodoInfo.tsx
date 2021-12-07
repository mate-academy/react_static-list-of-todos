import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <div className="todo__info">
    <h2 className="todo__title">
      {todo.title}
    </h2>

    <p className="todo__status">
      {todo.completed ? 'Completed' : 'Not completed'}
    </p>

    {todo.user && <UserInfo user={todo.user} />}
  </div>
);
