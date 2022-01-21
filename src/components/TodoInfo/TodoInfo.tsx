import React from 'react';
import './TodoInfo.scss';
import classNames from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todo: PreparedTodo;
};

export const TodoInfo:React.FC<Props> = ({ todo }) => (
  <div className="to-do__info">
    <h2 className="to-do__info-title">
      The goal:
      {' '}
      {todo.title}
    </h2>

    <UserInfo user={todo.user} />

    {todo.completed ? (
      <span className="to-do__info-complete--done">
        Completed
      </span>
    ) : (
      <span className="to-do__info-complete--not-done">
        Not completed
      </span>
    )}
  </div>
);
