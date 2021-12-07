import React from 'react';
import { Todo } from './TodoI';
import { UserInfo } from './UserInfo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  return (
    <div>
      <h2>{todo.title}</h2>
      <input type="checkbox" checked={todo.completed} />
      {todo.user && <UserInfo user={todo.user} />}
    </div>
  );
};
