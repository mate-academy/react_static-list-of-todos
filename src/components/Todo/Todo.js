import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';

import './Todo.scss';

export const Todo = ({ todo }) => (
  <li className="todo">
    <p className="todo__title">
      {todo.title}
    </p>
    <User user={todo.user} />
    <span>
      {checkIfCompleted(todo.completed)}
    </span>
  </li>
);

const checkIfCompleted = (done) => {
  if (done) {
    return (
      <p className="todo__completed">
        Completed
      </p>
    );
  }

  return (
    <p className="todo__not-completed">
      Not completed
    </p>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
  }).isRequired,
};
