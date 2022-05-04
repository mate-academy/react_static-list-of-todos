import React from 'react';
import classNames from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo,
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <div className="item__todo-info todo-info">
    <h2 className="todo-info__title">{todo.title}</h2>
    {todo.user && (
      <UserInfo user={todo.user} />
    )}
    <div className={classNames(
      'todo-info__check',
      { 'todo-info__check--active': todo.completed },
    )}
    />
  </div>
);
