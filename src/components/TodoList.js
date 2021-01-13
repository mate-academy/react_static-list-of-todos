import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import { TodoShape } from '../types';

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(task => (
      <li key={task.id}>
        <Todo {...task} />

      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(TodoShape).isRequired,
};

export default TodoList;
