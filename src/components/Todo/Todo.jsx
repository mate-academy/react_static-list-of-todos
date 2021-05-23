import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';

import './Todo.scss';

export function Todo({ title, completed, user }) {
  return (
    <span>
      <strong>{title}</strong>
      {' - '}
      <User {...user} />
      <i>{` (${completed ? 'Done' : 'Not yet'})`}</i>
    </span>
  );
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};
