import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import Todo from '../Todo/Todo';
import './Todolist.css';

function TodoList({ todoList }) {
  return (
    <ul className="list">
      {todoList.map(todo => (
        <li key={todo.id}>
          <Todo todo={todo} />
          <User user={todo.user} />
        </li>
      ))}
    </ul>
  );
}

TodoList.defaultProps = {
  todoList: [],
};

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      user: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    }),
  ),
};

export default TodoList;
