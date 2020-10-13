import React from 'react';
import PropTypes from 'prop-types';

import { User } from '../User';
import './User.css';

export const Todo = ({ title, completed, user }) => (
  <div
    className={`todo ${completed ? 'complete' : 'not-complete'}`}
  >
    <p>{title}</p>
    <p>{completed ? 'Completed' : 'Not completed'}</p>
    <User {...user} />
  </div>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};
