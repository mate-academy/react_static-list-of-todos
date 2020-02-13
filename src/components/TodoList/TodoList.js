import React from 'react';
import './TodoList.css';
import PropTypes from 'prop-types';

import { Todo } from '../Todo/Todo';
import { User } from '../User/User';

export const TodoList = ({ todos }) => (
  <ul className="todos">
    {todos.map(todo => (
      <li key={todo.id} className="todo">
        <Todo {...todo} />
        <User {...todo.user} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number,
      id: PropTypes.number,
      title: PropTypes.string,
      completed: PropTypes.bool,
      user: PropTypes.shape({
        name: PropTypes.string,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};
