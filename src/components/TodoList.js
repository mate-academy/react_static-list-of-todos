import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './Todo';

export const TodoList = ({ preparedTodos }) => (
  <>
    {preparedTodos.map(todo => (
      <li key={todo.id}>
        <Todo todo={todo} />
      </li>
    ))}
  </>
);

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      website: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired).isRequired,
};
