import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import './Todo.scss';

export const Todo = ({ task }) => (
  <div className="todo">
    <span className="todo__title">{task.title}</span>
    <span className="todo__status">
      {'Status: '}
      {task.completed ? 'completed' : 'in proggres'}
    </span>
    <User
      user={task.user}
    />
  </div>
);

Todo.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.string.isRequired,
  }).isRequired,
};
