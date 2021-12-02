import React from 'react';
import classNames from 'classnames';

// components
import { UserInfo } from '../UserInfo/UserInfo';

// types
import { Todo } from '../../types/todo';

type Props = {
  todo: Todo;
};

export const TodoInfo:React.FC<Props> = ({ todo }) => {
  return (
    <>
      <div className="todoItem__block">
        <div className="todoItem__wrap">
          <div className="todoItem__assignment">{todo.title}</div>
          <input className="todoItem__checkbox" type="checkbox" />
        </div>
        <div className={classNames(
          'todoItem__status',
          {
            todoItem__status__completed: todo.completed,
          },
        )}
        >
          {todo.completed ? ('Completed') : ('Not completed')}
        </div>
      </div>
      {todo.user && <UserInfo user={todo.user} />}
    </>
  );
};
