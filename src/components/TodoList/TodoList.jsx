import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';
import './TodoList.scss';

export const TodoList = ({ preparedTodos }) => (
  <ul className="listOfTodos">
    {preparedTodos.map(preparedTodo => (
      <li key={preparedTodo.id}>
        <Todo {...preparedTodo} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

TodoList.defaultProps = {
  preparedTodos: [],
};
