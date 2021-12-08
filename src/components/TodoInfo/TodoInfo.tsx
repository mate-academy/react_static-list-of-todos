import React from 'react';
import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';

import './TodoInfo.scss';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <div className="todoItem">
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
