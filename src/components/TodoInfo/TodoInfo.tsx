import React from 'react';
import classNames from 'classnames';

import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  return (
    <>
      {todo.user && <UserInfo user={todo.user} />}

      <div className="TodoList__todo-info">
        <p className="TodoList__title">{todo.title}</p>
        <p
          className={classNames(
            'TodoList__status',
            {
              'TodoList__status--finished': todo.completed,
            },
          )}
        >
          {todo.completed && 'Completed'}
        </p>
      </div>
    </>
  );
};
