import React from 'react';
import PropTypes from 'prop-types';
import './Todo.scss';
import User from '../User/User';

const Todo = ({ title, completed, person }) => (
  <li className="todo-item">
    <h3 className="todo-item__head">{normalaizeHead(title)}</h3>
    <p className="todo-item__status">
      {completed ? 'completed' : 'not completed yet'}
    </p>
    <User {...person} />
  </li>
);

const normalaizeHead = (str) => {
  const result = str.toUpperCase();

  return result[0] + str.slice(1);
};

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
