import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { User } from './User';

export const TodoItem = ({ title, completed, user }) => (
  <li className={completed ? 'item item--true' : 'item'}>
    <User {...user} />
    <p>{title[0].toUpperCase() + title.slice(1)}</p>
  </li>
);

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
