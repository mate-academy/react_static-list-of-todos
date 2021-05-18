import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line
import { User } from '../User/';

import './Todo.scss';

export const Todo = ({
  title,
  completed,
  user,
}) => (
  <div className="todo-info">
    <h2>{title}</h2>
    <p>
      <span><b>STATUS: </b></span>
      {completed ? (
        <span className="todo-info__status_completed">
          completed
        </span>
      ) : (
        <span className="todo-info__status_notCompleted">
          not completed
        </span>
      )}
    </p>
    <User {...user} />
  </div>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

Todo.defaultProps = {
  completed: false,
};
