import React from 'react';
import PropTypes from 'prop-types';

import { User } from '../User';
import './todo.scss';

export const Todo = ({
  user,
  title,
  completed,
}) => (
  <>
    <User name={user} />
    <p className="todo__title">
      {title}
      {' - '}
      {completed
        ? <span className="todo__completed">completed</span>
        : <span className="todo__completed--false">not completed</span>
      }
    </p>
  </>
);

Todo.propTypes = {
  user: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
