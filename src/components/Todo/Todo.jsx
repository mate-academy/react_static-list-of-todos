import React from 'react';
import './Todo.scss';
import PropTypes from 'prop-types';
import { User } from '../User/User';

export const Todo = ({ title, completed, user }) => (
  <li className={completed ? 'Todo Todo--completed' : 'Todo Todo--in-progress'}>
    <User {...user} />

    <p>
      {title}
    </p>

    <p>
      {completed ? 'completed' : 'in progress'}
    </p>
  </li>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
