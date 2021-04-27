import React from 'react';
import PropTypes from 'prop-types';

import { User } from '../User';

export function Todo({ title, completed, user }) {
  return (
    <div className="todo">
      <span>{title}</span>
      <span>{completed ? '✔️' : '❌'}</span>
      <User {...user} />
    </div>
  );
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
