import React from 'react';

type Props = {
  title: string;
  completed: boolean;
};

export const TodoInfo: React.FC<Props> = ({
  title,
  completed,
}) => (
  <>
    <h3 className="todo__item--title">
      {title}
    </h3>
    <p className="todo__item--status">
      {'Status: '}
      {completed ? 'Completed' : 'In progress'}
    </p>
  </>
);
