import React from 'react';
import PropTypes from 'prop-types';

import './Todo.css';

import User from '../User/User';

const Todo = ({ title, completed, person }) => (
  <li className="todo-item">
    <h3>{title}</h3>
    <p className="status">{completed ? 'completed' : 'not completed yet'}</p>
    <User {...person} />
  </li>
);

Todo.defaultProps = {
  person: null,
};

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

export default Todo;
