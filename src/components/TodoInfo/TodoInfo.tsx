import React from 'react';
import classNames from 'classnames';
import './TodoInfo.scss';
import { Todo } from '../../types';

type PropsS = {
  todo: Todo
};
export const TodoInfo: React.FC<PropsS> = ({ todo }) => (
  <div className={classNames(
    'todo-info',
    { completed: todo.completed },
  )}
  >
    <div>
      {todo.id}
    </div>
    <p>
      {todo.title}
    </p>
  </div>
);
