import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';

export const Todo = ({ todos }) => (
  <div>
    <h2 className="title">
      {todos.title}
    </h2>
    <h3>
      {todos.completed
        ? <div className="status">Status: completed!</div>
        : <div className="status-no">Status: not completed!</div>}
    </h3>
    <User user={todos.user} />
  </div>
);

Todo.propTypes = {
  todos: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
