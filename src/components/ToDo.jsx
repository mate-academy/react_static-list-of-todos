import React from 'react';
import { PropTypes } from 'prop-types';

import { User } from './User';

export function ToDo({ todo }) {
  let isCompleted;
  let isCompletedClass;

  if (todo.completed) {
    isCompletedClass = 'completed';
    isCompleted = 'is completed';
  } else {
    isCompletedClass = 'not-completed';
    isCompleted = 'is NOT completed';
  }

  return (
    <div className="card">
      {todo.id}
      .
      {' '}
      <div className="title">
        {todo.title}
      </div>
      {' '}
      Execution:
      <User user={todo.user} />
      {' '}
      <span className={isCompletedClass}>
        Task
        {' '}
        {isCompleted}
      </span>

    </div>
  );
}

ToDo.propTypes = {
  todo: PropTypes.shape({
    completed: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
