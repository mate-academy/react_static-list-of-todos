import React from 'react';
import PropTypes from 'prop-types';
import './Todo.scss';
import { User } from '../User/User';

export const Todo = ({ title, user, completed }) => {
  const stage = completed ? `done` : 'pending';

  return (
    <ul className="todo">
      <User name={user.name} />

      <li className="todo__title">
        <span className="todo__prefix">Title: </span>
        {title}
      </li>

      <li className={`todo__stage todo__stage--${stage}`}>
        <span className="todo__prefix">Stage: </span>
        {stage}
      </li>
    </ul>
  );
};

Todo.defaultProps = {
  user: {},
};

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.oneOfType([PropTypes.string]),
};
