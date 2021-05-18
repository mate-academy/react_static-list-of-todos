import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User';

export const Todo = ({ title, completed, user }) => (
  <p>
    <h2>{title}</h2>
    <b>{` ${completed} `}</b>
    <User {...user} />
  </p>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.objectOf().isRequired,
};
