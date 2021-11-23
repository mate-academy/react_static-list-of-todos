import React from 'react';
import classNames from 'classnames';

import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  return (
    <div className="TodoList__todo-info">
      <p className="TodoList__title">{todo.title}</p>
      <p
        className={classNames('TodoList__status', {
          'TodoList__status--finished': todo.completed,
        })}
      >
        {todo.completed && 'Completed'}
      </p>
    </div>
  );
};
