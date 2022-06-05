import React from 'react';
import { PreparedToDos } from '../../types/interfaces';
import UserInfo from '../UserInfo/UserInfo';

type Props = {
  todo: PreparedToDos,
};
const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <h2 data-cy="title">
      <strong>Task:</strong>
      {' '}
      {todo.title}
    </h2>

    <p data-cy="status">
      <strong>Status</strong>
      {' '}
      {todo.completed
        ? 'Completed'
        : 'Pending'}
    </p>

    {todo.user && (
      <UserInfo user={todo.user} />
    )}
  </>
);

export default TodoInfo;
