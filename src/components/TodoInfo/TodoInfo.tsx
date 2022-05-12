import React from 'react';
import { Todo } from '../../type/Todo';
import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <h3 className="todos-title">
      Todo:
      {' '}
      {todo.title}
    </h3>
    <h4>
      Status:
      {' '}
      {todo.completed ? 'Completed' : 'Not comleted'}
    </h4>
    <p>User Info:</p>
    {todo.user && <UserInfo user={todo.user} />}
  </>
);
