import React from 'react';
import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';

import './TodoInfo.scss';

export const TodoInfo: React.FC<Todo> = ({ title, completed, user }) => {
  return (
    <div className={classNames('todo',
      { todo__true: completed },
      { todo__false: !completed })}
    >
      <p className="todo__title">{title}</p>
      <span className={classNames('todo_completed',
        { todo_completed__true: completed },
        { todo_completed__false: !completed })}
      >
        {completed ? 'Completed' : 'In process...'}
      </span>
      {user && <UserInfo {...user} />}
    </div>
  );
};
