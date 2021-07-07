import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.scss';
import { Todo } from '../Todo/Todo';

export const TodoList = ({ preparedTodos }) => (
  <ul>
    {
      preparedTodos.map(todo => (
        <li
          className="todo"
          key={todo.id}
        >
          <Todo {...todo} />
        </li>
      ))
    }
  </ul>
);

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
