import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../todo/Todo';
import './TodoList.css';

export const TodoList = ({ preparedTodos }) => (
  <ul className="todo-list">
    {preparedTodos.map(todo => (
      <Todo key={todo.id} todoItem={todo} />
    ))}
  </ul>
);

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(Object).isRequired,
};
