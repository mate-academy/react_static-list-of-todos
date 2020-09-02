import React from 'react';
import './Todo.scss';
import PropTypes from 'prop-types';
import { User } from '../User';

export const Todo = ({ title, completed, user }) => (
  <div className="todo__content">
    <span>{title}</span>
    <span>{String(completed)}</span>
    <span className="todo__username">
      <User {...user} />
    </span>
  </div>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape().isRequired,
};
