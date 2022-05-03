import React from 'react';

import { UserInfo } from '../UserInfo/UserInfo';

import { User } from '../../types/User';
import './TodoInfo.scss';

type Props = {
  title: string,
  completed: boolean,
  user: User | null,
};

export const TodoInfo: React.FC<Props> = (props) => {
  const {
    title,
    completed,
    user,
  } = props;

  return (
    <>
      <p className="todo-info">
        <div className="todo-info__item">
          <span className="todo-info__title">
            Title:
            {' '}
          </span>
          {title}
        </div>
        <div className="todo-info__item">
          <span className="todo-info__title">
            Completed:
            {' '}
          </span>
          {completed ? 'Done' : 'Not ready'}
        </div>
      </p>
      <UserInfo user={user} />
    </>
  );
};
