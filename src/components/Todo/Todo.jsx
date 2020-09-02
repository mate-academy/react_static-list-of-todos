import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/index';

export const Todo = ({ todo }) => (
  <>
    <p>
      <User user={todo.user} />
    </p>
    <p>
      {todo.title}
    </p>
    <p>
      {(todo.completed) ? 'completed' : 'not complited'}
    </p>
  </>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    user: PropTypes.string.isRequired,
    completed: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
