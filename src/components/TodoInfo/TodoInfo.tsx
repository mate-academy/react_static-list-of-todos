import React from 'react';
import classNames from 'classnames';
import './TodoInfo.scss';
import { Todo } from '../types/Todo';
import { UserInfo } from '../UserInfo';

interface Props{
  todo: Todo;
}

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const status = todo.completed ? 'Completed' : 'Still in progress';

  return (
    <div className="container">
      <div className={classNames('status', {
        status__complete: todo.completed,
      })}
      >
        <div className="context">
          <div className="title">
            {todo.title}
          </div>
          <div className="status-style">
            {'Status - '}
            <em>{status}</em>
          </div>
          <div className="content">
            <UserInfo name={todo.user?.name} email={todo.user?.email} />
          </div>
        </div>
      </div>
    </div>
  );
};
