import React from 'react';

import './TodoInfo.scss';
import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const { title, completed } = todo;

  return (
    <div className="todo">
      <p className="todo__title">
        <em>{title}</em>
        {' '}
      </p>
      <p className="todo__status">
        {completed ? 'Completed!' : 'Not completed!'}
      </p>
    </div>
  );
};
