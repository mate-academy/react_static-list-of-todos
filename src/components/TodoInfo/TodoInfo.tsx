import React from 'react';
import classNames from 'classnames';

import { UserInfo } from '../UserInfo/UserInfo';
import { Todo } from '../../types/todo';

import './TodoItem.scss';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <div className="todoItem todoItem__container">
    {todo.user && <UserInfo user={todo.user} />}
    <div className="todoItem__task">
      <p className="todoItem__task-info">{todo.title}</p>
      <p className={classNames(
        'todoItem__task-status',
        {
          'todoItem__task-status--completed': todo.completed,
        },
      )}
      >
        {(todo.completed && 'Completed') || 'Not completed'}
      </p>
    </div>
  </div>
);
