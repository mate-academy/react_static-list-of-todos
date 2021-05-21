import React from 'react';
import './TodoList.css';
import PropTypes from 'prop-types';
import User from '../User/User';

const TodoList = ({ todoList }) => (
  todoList.map(todo => (
    <div className="todo">
      <div className="title">
        {todo.title}
      </div>
      <div className="todo-status">
        {todo.completed
          ? 'Completed'
          : (
            <div className="todo-status todo-status-uncompleted">
              Uncompleted
            </div>
          )}
      </div>
      <User {...todo.user} />
    </div>
  ))
);

TodoList.propTypes = {
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default TodoList;
