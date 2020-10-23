import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';
import './Todo.scss';

const Todo = ({ user, title, completed }) => (
  <div className={`todo-list__todo todo ${completed ? 'completed' : ''}`}>
    <User className="todo__user user" name={user.name} />
    <h1 className="todo__title">
      {title}
    </h1>
    <p className="todo__status">
      Completed:&nbsp;
      {completed ? '+' : '-'}
    </p>
  </div>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  completed: PropTypes.bool.isRequired,
};

export { Todo };
