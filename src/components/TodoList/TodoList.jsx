import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';
import './TodoList.css';

export const TodosList = ({ preparedTodos }) => (
  <ul className="container">
    {preparedTodos.map(todo => (
      <li key={todo.id} className="card">
        <Todo {...todo} />
      </li>
    ))}
  </ul>
);

TodosList.propTypes = {
  preparedTodos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
