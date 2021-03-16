import PropTypes from 'prop-types';
import React from 'react';
import { User } from '../User/User';
import './Todo.scss';

export function Todo({ title, completed, user }) {
  return (
    <>
      <User user={user} />
      {' '}
      <span className="title">{title}</span>
      <span>{completed ? '✅' : '❌'}</span>
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
