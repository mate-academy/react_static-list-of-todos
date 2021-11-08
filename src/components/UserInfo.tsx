import React from 'react';
import { Todo } from '../type/User';
import { TodoInfo } from './TodoInfo';

interface Props {
  todo: Todo;
}

export const UserInfo:React.FC<Props> = ({ todo }) => (
  <>
    <strong>{todo.title}</strong>
    <br />
    <div className="user-name">
      {todo.user && <TodoInfo user={todo.user} /> }
    </div>
  </>
);
