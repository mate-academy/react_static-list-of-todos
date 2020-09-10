import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';

export function Todo({ title, completed, user }) {
  return (
    <>
      <input className="" type="checkbox" checked={completed} />
      <span className="todo-title">{title}</span>
      {' - '}
      <User {...user} />
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
