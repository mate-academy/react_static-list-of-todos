import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';

export const Todo = ({ todo }) => (
  <>
    {todo.title}
    {todo.completed}
    <User user={todo.user} />
  </>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
