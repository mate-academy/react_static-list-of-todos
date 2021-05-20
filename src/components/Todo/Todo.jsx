import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';

import './Todo.scss';

function isCompleted(completed) {
  if (completed) {
    return 'Done';
  }

  return 'Not yet';
}

export function Todo({ title, completed, user }) {
  return (
    <span>
      <strong>{title}</strong>
      {' - '}
      <User {...user} />
      <i>{` (${isCompleted(completed)})`}</i>
    </span>
  );
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};
