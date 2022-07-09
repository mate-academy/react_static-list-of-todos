import React from 'react';
import './TodoInfo.scss';

type Props = {
  title: string;
  completed: boolean;
};

export const TodoInfo: React.FC<Props> = ({ title, completed }) => (
  <div className={!completed ? 'TodoInfo' : 'TodoInfo TodoInfo--completed'}>
    <h2 data-cy="title" className="TodoInfo__title">
      {title}
    </h2>

    <p data-cy="status" className="TodoInfo__status">
      {completed ? ('Completed') : ('Not completed!')}
    </p>
  </div>
);
