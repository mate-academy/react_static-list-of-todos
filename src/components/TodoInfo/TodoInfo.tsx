import React from 'react';
import { Todo } from '../../interfaces/Todo';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  return (
    <div>
      <h2 className="todoHeading">{todo.title}</h2>
      <input type="checkbox" checked={todo.completed} />
      {todo.user && <UserInfo user={todo.user} />}
    </div>
  );
};
