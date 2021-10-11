import React from 'react';
import classNames from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';
import { TodoTypes } from '../../types/TodoTypes';

type Props = {
  todo: TodoTypes,
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <li
    className={classNames(
      'todoList__item',
      {
        'todoList__item--done': todo.completed,
      },
    )}
  >
    <p className="todoList__title">
      <span className="todoList__heading">title:</span>
      <p className="todoList__text">{todo.title}</p>
    </p>
    {todo.user && (
      <UserInfo
        user={todo.user}
      />
    )}
    <span className="todoList__info">
      <span className="todoList__heading">status:</span>
      <p className="todoList__text todoList__text-status">{todo.completed ? 'Done' : 'In progres'}</p>
    </span>
  </li>
);
