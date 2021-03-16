import PropTypes from 'prop-types';
import React from 'react';
import { Todo } from '../Todo/Todo';
import './TodoList.scss';

export function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li className="list__element" key={todo.id}>
          <Todo {...todo} />
        </li>
      ))}
      ,
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
