import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from '../ToDoItem/ToDoItem';
import './ToDoList.css';

function ToDoList({ todos }) {
  return (
    <div className="todo-list">
      {todos.map(item => <ToDoItem todo={item} key={item.id} />)}
    </div>
  );
}

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
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
  ).isRequired,
};

export default ToDoList;
