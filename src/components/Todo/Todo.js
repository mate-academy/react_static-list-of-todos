import React from 'react';
import PropTypes from 'prop-types';

import User from '../User/User';
import './Todo.css';

const Todo = ({ todo }) => (
  <li className="App__item">
    {
      `Title: ${todo.title}
        Status: ${todo.completed ? 'completed' : 'uncompleted'}`
    }
    <br />
    <User user={todo.user} />
  </li>
);

export default Todo;

Todo.propTypes = {
  todo: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
  }).isRequired,
};
