import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './Todo';
import { todoShape } from '../shapes';

export const TodoList = ({ todos }) => (
  <div>
    {todos.map(todo => (
      <span key={todo.id}>
        <Todo todoObj={todo} />
      </span>
    ))}
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(todoShape).isRequired,
};
