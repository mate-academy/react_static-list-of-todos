import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';
import { TypeTodos } from '../../types';

export const TodoList = ({ todos }) => (
  <ul>
    {todos.map(task => (
      <Todo {...task} key={task.id} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    TypeTodos,
  ).isRequired,
};
