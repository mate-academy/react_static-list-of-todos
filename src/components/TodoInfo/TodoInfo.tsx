import React from 'react';
import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const { title, completed, user } = todo;

  return (
    <li className="todos-list__todoInfo todoInfo">
      <div className="todoInfo__title">
        Task name:
        {' '}
        {title}
      </div>
      <div className={completed ? 'todoInfo__completed'
        : 'todoInfo__not-completed'}
      >
        Task status:
        {' '}
        {completed ? 'completed' : 'not completed'}
      </div>
      <div>
        User name:
        {' '}
        {user ? user.name : 'no information'}
      </div>
      <div>
        User email:
        {' '}
        {user ? user.email : 'no information'}
      </div>
    </li>
  );
};
