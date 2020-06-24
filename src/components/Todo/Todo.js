import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';

const Todo = ({ todo }) => (
  <p>
    {todo.completed
      ? (
        <span className="done">
          DONE
          <span role="img" aria-label="done">✅</span>
        </span>
      )
      : (
        <span className="undone">
          UNDONE
          <span role="img" aria-label="undone">😧</span>
        </span>
      )}
    <User userInfo={todo.user} />
  </p>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
  }).isRequired,
};

export { Todo };
