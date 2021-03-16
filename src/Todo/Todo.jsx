import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';

import './Todo.scss';

export const Todo = ({ todo }) => (
  <>
    <span className="list__title">
      {todo.title}
    </span>
    <span className="list__completed">
      {todo.completed ? '✔' : '✘'}
    </span>
    <User user={todo.user} />
  </>
);

Todo.propTypes = {
  todo: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      user: PropTypes.object.isRequired,
    }),
  ).isRequired,
};
