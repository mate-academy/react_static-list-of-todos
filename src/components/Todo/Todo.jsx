import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';

export const Todo = ({ title, completed, user }) => (
  <div className="listBlock">
    <h2>{title}</h2>
    <p>
      <strong>Status</strong>
      {' '}
      -
      {' '}
      {completed ? 'done' : 'in process'}
    </p>
    <User {...user} />
  </div>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
