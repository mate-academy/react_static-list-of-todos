import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';

export function Todo({ title, completed, user }) {
  return (
    <>
      <User {...user} />
      <span>
        {title}
      </span>
      <span>{(completed) ? '⚡' : '❌'}</span>
    </>
  );
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape.isRequired,
};
