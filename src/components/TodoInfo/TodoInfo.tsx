import React from 'react';
import './TodoInfo.scss';

type Props = {
  title: string;
  completed: boolean;
};

export const TodoInfo: React.FC<Props> = ({ title, completed }) => (
  <>
    <span className="todo__title">{`${title} - `}</span>
    <span className={completed ? 'todo__completed' : 'todo__not-completed'}>{completed ? 'completed' : 'not completed'}</span>
  </>
);
