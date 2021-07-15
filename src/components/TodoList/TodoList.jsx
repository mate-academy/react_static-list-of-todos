import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';
import { todoShape } from '../../types';

export const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id}>
        <Todo todoObj={todo} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(todoShape).isRequired,
};
