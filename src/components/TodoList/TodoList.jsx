import React from 'react';
import PropTypes from 'prop-types';

import './TodoList.css';

import Todo from '../Todo/Todo';

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <Todo key={todo.id} todo={todo} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
