import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';

import './TodoList.css';

export const TodoList = ({ preparedTodos }) => (
  <ul className="todoList">
    {preparedTodos.map(item => (
      <li key={item.id} className="todoList__item">
        <Todo todo={item} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
};
