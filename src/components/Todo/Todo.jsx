import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import './todo.scss';

export const Todo = ({
  user,
  title,
  completed,
}) => (
  <div className="toDosList">
    <User name={user} />
    <br></br>
    <span className="toDosList__title">
      {' '}
      <strong>Task:</strong>
      {' '}
      {title}
    </span>
    {' - '}
    {(completed)
      ? <span className="toDosList__complited">completed</span>
      : (
        <span className="toDosList__notComplited">
          not completed
        </span>
      )
    }
  </div>
);

Todo.propTypes = {
  user: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
