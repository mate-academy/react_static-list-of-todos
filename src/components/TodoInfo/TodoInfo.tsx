import React from 'react';

type Props = {
  todo: Todo,
};

export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <p data-cy="title">
      {`Task: ${todo.title}`}
    </p>
    <p data-cy="status">
      {`Status: ${todo.completed === true
        ? 'Completed'
        : 'Not Completed'}`}
    </p>
  </>
);
