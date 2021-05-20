/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import './Todo.css';

const Todo = ({ todo }) => (
  <div className="container">
    <User user={todo.user} />
    <span className="title">{`${todo.title} : `}</span>
    <span className="status">
      {todo.completed
        ? <span className="completed">completed</span>
        : <span className="not-completed">not completed</span>
      }
    </span>
  </div>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Todo;
