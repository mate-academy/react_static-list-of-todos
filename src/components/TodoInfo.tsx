import React from 'react';
import { Todo } from '../type/User';
import { UserInfo } from './UserInfo';

interface Props {
  todo: Todo;
}

export const TodoInfo:React.FC<Props> = ({ todo }) => (
  <>
    <strong>{todo.title}</strong>
    <br />
    <div className="user-name">
      {todo.user && <UserInfo user={todo.user} /> }
    </div>
  </>
);
