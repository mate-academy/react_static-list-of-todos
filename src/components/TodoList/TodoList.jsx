import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';
import { todosTypes } from '../../types';

export function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(el => (
        <li key={el.id}>
          <Todo todo={el} />
        </li>
      ))}
    </ul>
  );
}

TodoList.defaultProps = {
  todos: [],
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape(
      todosTypes,
    ),
  ),
};
