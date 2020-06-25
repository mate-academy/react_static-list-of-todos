import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';

import './TodoList.css';

export const TodoList = ({ todos }) => (
  <div className="todo">
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} />
    ))}
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
