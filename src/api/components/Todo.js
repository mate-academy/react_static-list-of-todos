import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const Todo = ({ user, title, completed }) => (
  <li>
    <User user={user} />
    <p>
      To-do:
      {' '}
      {title}
    </p>
    <p>
      Complete:
      {' '}
      {completed.toString()}
    </p>
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
