import React from 'react';
import PropTypes from 'prop-types';

import { User } from '../User';

export const Todo = ({ title, completed, user }) => (
  <>
    <User name={user.name} />
    <span className="title">{title}</span>
    <span>
      Status:
      {' '}
      <span>{(completed) ? '✅' : '❌'}</span>
    </span>
  </>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
