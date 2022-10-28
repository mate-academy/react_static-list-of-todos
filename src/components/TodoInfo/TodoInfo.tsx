import React from 'react';

type Props = {
  title: string;
  completed: boolean;
};

export const TodoInfo: React.FC<Props> = ({ title, completed }) => (
  <>
    <h1 data-cy="title">
      Task:
      {' '}
      {title}
    </h1>

    <div data-cy="status">
      Status:
      {' '}
      {completed === false ? 'Not done' : 'Done'}
    </div>
  </>
);
