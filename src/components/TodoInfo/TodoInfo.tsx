import React from 'react';

import { PreparedTodos } from '../../types/interface';
import { UserInfo } from '../UserInfo/UserInfo';

import './TodoInfo.scss';

type Props = {
  todo: PreparedTodos,
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <div className="todo">
    <h2 className="todo__title">
      {todo.title}
    </h2>

    <div className="todo__info">
      <input className="todo__check" type="checkbox" checked={todo.completed} />
      {todo.user && <UserInfo user={todo.user} />}
    </div>
  </div>
);
