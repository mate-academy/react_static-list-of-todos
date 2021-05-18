import React from 'react';
import './Todo.scss';
import PropTypes from 'prop-types';
import User from '../User/User';

const Todo = ({ todo, user }) => (
  <div className="todo">
    <div className={`todo-status ${todo.completed
      && 'todo-status__completed'}`}
    >
      {todo.completed ? 'completed' : 'not completed'}
    </div>
    <div className="todo-title">{todo.title}</div>
    <User user={user} />
  </div>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Todo;
