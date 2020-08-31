import React from 'react';
import PropTypes from 'prop-types';
import User from '../User';
import './Todo.css';

function Todo({ todo }) {
  return (
    <li className="todo">
      <User user={todo.user} />
      <p className="todo__title">{todo.title}</p>
      <span>
        {
          todo.completed
            ? <p className="todo__green">Done</p>
            : <p className="todo__yellow">In progress</p>
        }
      </span>
    </li>
  );
}

Todo.propTypes = {
  todo: PropTypes.objectOf(PropTypes.strings).isRequired,
};

export default Todo;
