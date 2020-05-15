import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';

export const Todo = ({ todo: { user, title, completed } }) => (
  <>
    <div className={completed
      ? 'todo todo-done'
      : 'todo'}
    >
      <p><User user={user} /></p>
      <p>
        <b>Todo:</b>
        {' '}
        {title}
      </p>
    </div>
  </>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};
