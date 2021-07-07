import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './Todo';
import './TodoList.scss';

export const TodoList = ({ todos }) => (
  <ul className="list">
    {todos.map(todo => (
      <li key={todo.id} className="list__item">
        <Todo {...todo} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
