import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';

import Todo from '../Todo/Todo';
import User from '../User/User';

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li className="card" key={todo.id}>
        <Todo {...todo} />
        <User {...todo.user} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      user: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

export default TodoList;
