import React from 'react';

import './TodoInfo.scss';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const { title, completed } = todo;

  return (
    <div className="todo">
      <p className="todo__title">
        {title}
        {' '}
      </p>
      <p className="todo__status">
        {completed ? 'Task Completed!' : 'Task is not completed yet!'}
      </p>
    </div>
  );
};
