import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';
import { ShapeTodo } from '../Shapes/ShapeTodo';

import './TodoList.css';

export const TodoList = ({ todos }) => (
  <div className="todo">
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} />
    ))}
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(ShapeTodo).isRequired,
};
