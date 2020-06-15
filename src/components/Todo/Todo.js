import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';
import './Todo.css';

const setFirstChar = string => (
  string.replace(/^(\w)/, match => match.toUpperCase())
);

const Todo = props => (
  <li className="todos__item todo">
    <div>
      <input
        className="todo__completed"
        type="checkbox"
        checked={props.completed && true}
        readOnly
      />
      <span className="todo__title">
        {setFirstChar(props.title)}
      </span>
    </div>
    <User {...props.user} />
  </li>
);

export { Todo };

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired,
};
