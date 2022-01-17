import React from 'react';
import './TodoInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todo: PreparedTodo;
};

export const TodoInfo:React.FC<Props> = ({ todo }) => (
  <div className="to_do__info">
    <h2 className="to_do__info_title">
      The goal:
      {' '}
      {todo.title}
    </h2>

    <UserInfo user={todo.user} />

    {todo.completed ? (
      <span className="to_do__info_complete--done">
        Completed
      </span>
    ) : (
      <span className="to_do__info_complete--not_done">
        Not completed
      </span>
    )}
  </div>
);
