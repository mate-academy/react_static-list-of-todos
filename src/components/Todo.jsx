import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';

export const Todo = ({ todo }) => (
  <>
    <h2>
      {`Title: ${todo.title}`}
    </h2>
    {`Completed status: ${todo.completed ? 'YES' : 'NOT NOW'}`}
    <p>
      <User user={todo.user} />
    </p>
  </>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.shape().isRequired,
  }).isRequired,
};
