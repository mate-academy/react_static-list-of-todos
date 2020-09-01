import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.scss';
import { Todo } from '../Todo/Todo';

export const TodoList = ({ preparedTodos }) => (
  <ul>
    {
      preparedTodos.map(todo => (
        <Todo
          key={todo.id}
          {...todo}
        />
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
