import React from 'react';
import './Todo.scss';
import PropTypes from 'prop-types';
import User from '../User/User';

const Todo = ({ title, completed, user }) => (
  <li className={completed
    ? 'todo__item todo__item--done'
    : 'todo__item todo__item--undone'}
  >
    <User {...user} />
    <p>{title}</p>
    <p>{completed ? 'DONE!' : 'in process...'}</p>
  </li>
);

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Todo;
