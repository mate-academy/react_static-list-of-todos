import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';

import './Todo.scss';

export const Todo = ({
  title,
  completed,
  user,
}) => (
  <div className="todo__container">
    Task name
    {' : '}
    <h2 className="todo__title">
      {title}
    </h2>
    Task for
    {' : '}
    <User {...user} />
    <br />
    Task status
    {' : '}
    <span className="todo__completed">
      {completed
        ? <strong className="todo__completed_true">Done</strong>
        : <strong className="todo__completed_false">Not done</strong>
      }
    </span>
  </div>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({}).isRequired,
};
