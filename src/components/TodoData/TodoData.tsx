import React from 'react';
import { Todo } from '../../type/todo';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todo: Todo;
};

export const TodoData: React.FC<Props> = ({ todo }) => {
  return (
    <div>
      <h2>{todo.title}</h2>
      <input type="checkbox" checked={todo.completed} />
      {todo.user && <UserInfo user={todo.user} />}
    </div>
  );
};
