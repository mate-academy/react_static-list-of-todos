import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';

import './TodoList.css';

export const TodoList = ({ preparedTodos }) => (
  <ul className="todoList">
    {preparedTodos.map(item => (
      <li key={item.id} className="todoList__item">
        <Todo {...item} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    author: PropTypes.objectOf(PropTypes.string).isRequired,
  })).isRequired,
};
