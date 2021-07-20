import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';
import './TodoList.css';

export const TodosList = ({ todos }) => (
  <ul className="container">
    {todos.map(todo => (
      <li key={todo.id} className="card">
        <Todo
          title={todo.title}
          completed={todo.completed}
          user={todo.user}
          id={todo.id}
        />
      </li>
    ))}
  </ul>
);

TodosList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
