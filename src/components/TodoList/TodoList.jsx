import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.scss';
import { Todo } from '../Todo/Todo';

export const TodoList = ({ preparedTodos }) => (
  <ul className="list">
    {preparedTodos.map(todo => (
      <li className="list-input" key={todo.id}>
        <Todo {...todo} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
