import React from 'react';
import { PreparedTodo } from '../../types/PreparedTodo';

type Props = {
  todo: PreparedTodo
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <span>
      {todo.title}
    </span>
    <span>
      {todo.completed
        ? 'Done'
        : 'Active'}
    </span>
  </>
);
