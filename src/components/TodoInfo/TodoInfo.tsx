import React from 'react';
import './TodoInfo.scss';

type Props = {
  todo:Todo;
};

export const TodoInfo: React.FC<Props> = (props) => {
  const { todo } = props;
  const { title, completed } = todo;

  return (
    <p className="todoInfo">
      <span className="taskName">
        {title}
      </span>
      <span className="taskStatus">
        {
          completed ? 'complete' : 'in progress'
        }
      </span>
    </p>
  );
};
