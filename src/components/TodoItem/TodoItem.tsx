import React from 'react';
import classNames from 'classnames';
import './TodoItem.scss';

type Props = {
  title: string,
  completed: boolean,
};

export const TodoItem: React.FC<Props> = ({ title, completed }) => (
  <div
    className={classNames(
      'TodoItem',
      { 'TodoItem--completed': completed },
    )}
  >
    <h3 className="TodoItem__title">{title}</h3>
    <p className="TodoItem__status">
      {'Status: '}
      {completed ? 'Completed' : 'In progres'}
    </p>
  </div>
);
