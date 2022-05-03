import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  return (
    <div className="TodoInfo">
      <span className={todo.completed ? 'TodoInfo__status TodoInfo__status--completed' : 'TodoInfo__status'}>
        {todo.completed ? 'completed' : 'not completed'}
      </span>

      <h5 className="TodoInfo__title">
        {todo.title}
      </h5>

      {todo.user && <UserInfo user={todo.user} />}
    </div>
  );
};
