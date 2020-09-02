import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';
import './Todo.scss';

export const Todo = ({ title, completed, user }) => (
  <div className="todo-content">
    <span className="nameOfTodo">
      <span> * </span>
      {title}
    </span>
    <span className="completed">
      {completed ? ' Done' : ' In progress'}
    </span>
    <span>
      <User {...user} />
    </span>
  </div>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
