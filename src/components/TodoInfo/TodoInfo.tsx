import React from 'react';
import './TodoInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todo: PreparedTodo;
};

export const TodoInfo:React.FC<Props> = ({ todo }) => {
  let completion: string;
  let message: string;

  if (todo.completed) {
    completion = 'to_do__info_complete--done';
    message = 'Completed';
  } else {
    completion = 'to_do__info_complete--not_done';
    message = 'Not completed';
  }

  return (
    <div className="to-do__info">
      <h2 className="to-do__info-title">
        The goal:
        {' '}
        {todo.title}
      </h2>

      <UserInfo user={todo.user} />

      <span className={completion}>
        {message}
      </span>
    </div>
  );
};
