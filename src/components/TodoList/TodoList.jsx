import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';
import { Todo } from '../Todo/Todo';

export const TodoList = ({ prepTodos }) => (
  <ol className="todoList">
    {prepTodos.map(todo => (
      <li className="todo" key={todo.id}>
        <Todo {...todo} />
      </li>
    ))}
  </ol>
);

TodoList.propTypes = {
  prepTodos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
