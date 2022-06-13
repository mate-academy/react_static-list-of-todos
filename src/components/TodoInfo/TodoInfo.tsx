import React from 'react';
import { PreparedTodos } from '../../types/Types';
import UserInfo from '../UserInfo/UserInfo';

type Props = {
  todo: PreparedTodos,
};

const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <h2 data-cy="title">
      Title:
      {todo.title}
    </h2>
    <span data-cy="status">
      Status:
      {todo.completed ? 'Completed' : 'Not completed!'}
    </span>
    {todo.user && <UserInfo user={todo.user} />}
  </>
);

export default TodoInfo;
