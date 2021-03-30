import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import './todo.scss';

export const Todo = ({ title, completed, user }) => (
  <div className="toDosList__item-information">
    <User user={user} />
    <span className="toDosList__item-title">
      <strong>Task:</strong>
      {' '}
      {title}
    </span>
    {(completed) ? (
      <span className="toDosList__item-image">
        <img
          src="https://img.icons8.com/offices/30/000000/ok.png"
          alt="done"
        />
      </span>
    ) : (
      <span className="toDosList__item-image">
        <img
          src="https://img.icons8.com/offices/30/000000/do-not-disturb.png"
          alt="not done"
        />
      </span>
    )}
  </div>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.string.isRequired,
};
