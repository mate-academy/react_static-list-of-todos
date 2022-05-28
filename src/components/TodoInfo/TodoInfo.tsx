import React from 'react';

type Props = {
  title: string;
  completed: boolean;
};

export const TodoInfo: React.FC<Props> = ({ title, completed }) => (
  <>
    <p data-cy="title">
      {`Task: ${title}`}
    </p>
    <p data-cy="status">
      {`Status: ${completed === true
        ? 'Completed'
        : 'Not Completed'}`}
    </p>
  </>
);
