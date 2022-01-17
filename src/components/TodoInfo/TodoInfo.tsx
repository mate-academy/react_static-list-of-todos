import React from 'react';
import classNames from 'classnames';
import './TodoInfo.scss';

import { UserInfo } from '../UserInfo';

export const TodoInfo:React.FC<PrepearedTodo> = ({
  title,
  completed,
  user,
}) => (
  <div className="todo">
    <h3 className="todo__title">
      {title}
    </h3>

    <p className={classNames('todo__uncompleted', { todo__completed: completed })}>
      {completed ? 'Completed' : 'Not completed'}
    </p>

    {user && <UserInfo user={user} />}
  </div>
);
