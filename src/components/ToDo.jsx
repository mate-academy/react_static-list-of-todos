import React from 'react';
import { PropTypes } from 'prop-types';

import { User } from './User';

export function ToDo({ todo }) {
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
      <span className={todo.completed ? 'completed' : 'not-completed'}>
        Task is
        {' '}
        {todo.completed ? '' : 'NOT'}
        {' '}
        colmpeted
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
