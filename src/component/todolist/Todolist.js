import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';
import { Todo } from '../todo/Todo';
import { ShapeTodo } from '../Shapes/ShapeTodo';

export const TodoList = ({ preparedTodos }) => (
  <ul className="todo-list">
    {preparedTodos.map(todo => (
      <Todo key={todo.id} todoItem={todo} />
    ))}
  </ul>
);

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(ShapeTodo).isRequired,
};
