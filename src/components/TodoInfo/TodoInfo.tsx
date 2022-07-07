import React from 'react';
import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <span>
      {todo.title}
    </span>
    <br />
    <span data-cy="status">
      {todo.completed
        ? 'completed'
        : 'not completed'}
    </span>
    <br />
  </>
);
