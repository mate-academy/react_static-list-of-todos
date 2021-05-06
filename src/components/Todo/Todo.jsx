import React from 'react';
import PropTypes from 'prop-types';

import { User } from '../User';

export const Todo = ({ user, todo }) => (
  <>
    <div className="todo">
      <span className="todo__title">{todo.title}</span>
      <span className={
        `todo__is-completed todo__is-completed--${
          todo.completed ? 'true' : 'false'
        }`
      }
      >
        Is complete:
      </span>
    </div>
    <div className="user">
      <User user={user} />
    </div>
  </>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
