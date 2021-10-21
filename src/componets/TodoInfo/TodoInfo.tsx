import React from 'react';

import './TodoInfo.scss';

type Props = {
  title: string,
  completed: boolean,
};

export const TodoInfo: React.FC<Props> = ({ title, completed }) => (
  <>
    <p className="person__title">{title}</p>
    <p className="person__completed">
      {
        completed ? 'completed' : 'no completed'
      }
    </p>
  </>
);
