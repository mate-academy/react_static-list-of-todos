import React from 'react';
import { Todo } from '../types/Todo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const { title, completed } = todo;

  return (
    <>
      <p className="todo__title">
        {title}
      </p>
      <p className="todo__status">
        {completed ? 'Completed' : 'In process'}
      </p>
    </>
  );
};
