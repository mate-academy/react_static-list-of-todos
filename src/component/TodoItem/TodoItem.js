import React from 'react';
import './TodoItem.css';
import PropTypes from 'prop-types';
import User from '../User/User';

function TodoItem({ todo }) {
  return (
    <div className="todo-item">
      <h2>{todo.title}</h2>
      <p>{todo.completed ? 'Completed' : 'Not completed'}</p>
      <User user={todo.user} />
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
};

export default TodoItem;
