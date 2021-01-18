import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './Todo';
import { TodoType } from './Types';

export const TodoList = ({ todos }) => (
  <div>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <Todo todo={todo} />
        </li>
      ))}
    </ul>
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(TodoType).isRequired,
};
