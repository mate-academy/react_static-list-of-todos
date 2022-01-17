import React from 'react';
import './TodoInfo.scss';

type Props = {
  title:string,
  completed: boolean,
};

export const TodoInfo:React.FC<Props> = ({ title, completed }) => (
  <div className="todo_info">
    <h1 className="todo_info__title">{title}</h1>
    <div className="todo_info__completed">
      {completed
        ? 'completed'
        : 'not completed'}
    </div>
  </div>
);
