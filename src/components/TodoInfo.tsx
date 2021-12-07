import React from 'react';

type Props = {
  title: string,
  completed: boolean,
};

export const TodoInfo: React.FC<Props> = ({ title, completed }) => (
  <>
    <span>
      {'Title: '}
    </span>
    <strong>
      {title}
    </strong>
    <p>
      {'Status: '}
      <strong>
        {completed ? 'done' : 'still in progress'}
      </strong>
    </p>
  </>
);
