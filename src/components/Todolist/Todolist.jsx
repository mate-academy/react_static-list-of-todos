import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';
import './Todolist.css';

export const Todolist = ({ prepTodos }) => (
  <ol>
    {prepTodos.map(todo => (
      <li className="todo" key={todo.id}>
        <Todo {...todo} />
      </li>
    ))}
  </ol>
);

Todolist.propTypes = {
  prepTodos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
