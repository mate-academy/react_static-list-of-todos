import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import './Todo.scss';

export const Todo = ({ title, completed, user }) => (
  <div className="todo">
    <User {...user} />
    <p className="todo__text">{title}</p>
    {completed
      ? <span className="badge badge-success">Completed</span>
      : <span className="badge badge-info">In progress</span>
    }
  </div>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};
