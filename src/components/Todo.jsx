import React from 'react';
import PropTypes from 'prop-types';
import './Todo.scss';

import { User } from './User';

export const Todo = ({ title, completed, user }) => (
  <li className={completed ? 'completed' : 'inprogress'}>
    <User {...user} />
    <p>{title}</p>
    <p>{completed ? 'completed' : 'inprogres...'}</p>
  </li>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
