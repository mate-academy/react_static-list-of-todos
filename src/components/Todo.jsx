import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';

export const Todo = todo => (
  <div className="todo">
    <h2>{todo.title}</h2>
    <p>
      Status:
      {todo.completed ? 'true' : 'false'}
    </p>
    <User {...todo.user} />
  </div>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
  }),
};
