import React from 'react';
import PropTypes from 'prop-types';

import './Todo.css';

import User from '../User/User';

const Todo = ({ todo }) => {
  const { title, completed, person } = todo;

  return (
    <li className="todo-item">
      <h3>{title}</h3>
      <p className="status">{completed ? 'completed' : 'not completed yet'}</p>
      <User {...person} />
    </li>
  );
};

Todo.defaultProps = {
  todo: null,
};

Todo.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    person: PropTypes.object.isRequired,
  }),
};

export default Todo;
