import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';
import { Todo } from '../Todo/Todo';
import { ShapeTodo } from '../Shapes/ShapeTodo';

export const TodoList = ({ readyTodos }) => (
  <ul className="todo-list">
    {readyTodos.map(todo => (
      <Todo key={todo.id} todoItem={todo} />
    ))}
  </ul>
);

TodoList.propTypes = {
  readyTodos: PropTypes.arrayOf(ShapeTodo).isRequired,
};
