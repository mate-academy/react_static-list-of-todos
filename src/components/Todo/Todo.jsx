import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import './todo.scss';

export const Todo = ({
  user,
  title,
  completed,
}) => (
  <div className="todo-list">
    <User user={user} />
    <br></br>
    <span className="todo-list__title">
      {' '}
      <strong>Task:</strong>
      {' '}
      {title}
    </span>
    {' - '}
    {(completed)
      ? <span className="todo-list__complited">completed</span>
      : (
        <span className="todo-list__notComplited">
          not completed
        </span>
      )
    }
  </div>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};
