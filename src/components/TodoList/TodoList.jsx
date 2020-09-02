import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';
import './TodoList.scss';

export const TodoList = ({ preparedTodos }) => (
  <ul className="todo_list">
    {preparedTodos.map(todo => (
      <li className="todo" key={todo.id}><Todo {...todo} /></li>
    ))}
  </ul>
);

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
