import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';
import { TypeTodo } from '../../types';

export const TodoList = ({ todos }) => (
  <ul>
    {todos.map(task => (
      <li key={task.id}><Todo {...task} /></li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    TypeTodo,
  ).isRequired,
};
