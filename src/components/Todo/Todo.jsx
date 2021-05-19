import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import './Todo.scss';

export const Todo = ({ title, completed, user }) => (
  <div className="todo">
    <h1 className="todo__title">{title}</h1>
    <p className={`todo__status ${completed && 'todo__status--active'}`}>
      Status:
      {completed ? ' completed' : ' not completed'}
    </p>
    <User {...user} />
  </div>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.string.isRequired,
};
