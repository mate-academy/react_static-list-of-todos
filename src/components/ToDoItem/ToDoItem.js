import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import './ToDoItem.css';

function ToDoItem({ todo }) {
  return (
    <div className={todo.completed
      ? 'card text-white bg-success mb-3'
      : 'card bg-light mb-3'}
    >
      <h2 className="card-header">{todo.title}</h2>
      <p className="cardbody">
        { todo.completed ? '\u2714' : '\u2718' }
      </p>
      <User user={todo.user} />
    </div>
  );
}

ToDoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string,
    completed: PropTypes.bool,
    id: PropTypes.number,
    user: PropTypes.shape({
      name: PropTypes.string,
      username: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ToDoItem;
