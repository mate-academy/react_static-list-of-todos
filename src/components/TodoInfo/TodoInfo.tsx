import React from 'react';
import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <div>
    {`Id: ${todo.user?.id}`}
    <br />
    <p data-cy="title">
      {todo.title}
    </p>
    <p data-cy="status">
      {todo.completed ? 'Completed' : 'Not completed!'}
    </p>
  </div>
);
