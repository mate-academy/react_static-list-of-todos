import React from 'react';
import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo,
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <article className="TodoInfo TodoInfo--completed">
    <h2 className="TodoInfo__title">{todo.title}</h2>

    <strong className="status" data-cy="status">
      {todo.completed ? 'Completed' : 'Not completed'}
    </strong>
  </article>
);
