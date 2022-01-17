import React from 'react';
import './TodoInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';
import { PreparedTodo } from '../../types/types';

type Props = {
  goal: PreparedTodo;
};

export const TodoInfo:React.FC<Props> = ({ goal }) => {
  let completion: string;
  let message: string;

  if (goal.completed) {
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
        {goal.title}
      </h2>

      <UserInfo user={goal.user} />

      <span className={completion}>
        {message}
      </span>
    </div>
  );
};
