import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';

export function Todo({ title, completed, user }) {
  return (
    <>
      <h1><span className="todo-title">{title}</span></h1>
      <span>
        <input type="checkbox" defaultChecked={completed} />
        <strong><User {...user} /></strong>
      </span>
    </>
  );
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
