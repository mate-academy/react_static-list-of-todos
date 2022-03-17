import React from 'react';

import './TodoInfo.scss';

type Props = {
  title: string;
  completed: boolean;
};

export const TodoInfo: React.FC<Props> = ({ title, completed }) => (
  <div className="todo todo-list__todo">
    <div className="todo__title">
      {title}
    </div>
    <div className={`todo__progress ${completed ? 'todo__progress--completed' : ''}`}>
      {completed ? 'Completed' : 'In progress'}
    </div>
  </div>
);
