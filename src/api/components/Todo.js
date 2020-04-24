import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const Todo = ({ id, user, title, completed }) => (
  <li>
    <span className="card_number">{id}</span>
    <User user={user} />
    <p>
      <strong>To-do:</strong>
      <i>{title}</i>
    </p>
    <p>
      <strong>Complete:</strong>
      <i>{completed.toString()}</i>
    </p>
  </li>
);

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Todo;
