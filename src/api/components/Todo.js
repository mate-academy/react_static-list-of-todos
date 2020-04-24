import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const Todo = ({ id, user, title, completed }) => (
  <React.Fragment>
    <span className="card_number">{id}</span>
    <User user={user} />
    <p>
      <strong>To-do:</strong>
      <i>{title}</i>
    </p>
    <p>
      <strong>Complite:</strong>
      <i>{completed.toString()}</i>
    </p>
  </React.Fragment>
);

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default Todo;
