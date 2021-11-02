import React from 'react';
import classname from 'classnames';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

type Props = {
  todo: Todo,
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <li
    className={classname(
      'todo',
      'todo-state',
      { 'todo-state--done': todo.completed },
    )}
  >
    <span className="todo__title">
      {todo.title}
      <br />
    </span>
    {todo.user && (
      <UserInfo user={todo.user} />
    )}
  </li>
);
