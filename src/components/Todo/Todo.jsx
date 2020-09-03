import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Todo.scss';
import { User } from '../User/User';

export const Todo = ({ title, user, completed }) => (
  <ul className="todo">
    <li className="todo__username">
      <User name={user.name} />
    </li>

    <li className="todo__title">
      <span className="todo__prefix">Title: </span>
      {title}
    </li>

    <li className={
      classNames('todo__stage', { 'todo__stage--done': completed })
    }
    >
      <span className="todo__prefix">Stage: </span>
      {completed ? `done` : 'pending'}
    </li>
  </ul>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape(
    {
      name: PropTypes.string,
    },
  ).isRequired,
};
