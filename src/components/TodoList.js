import React from 'react';
import PropTypes from 'prop-types';

import { Todo } from './Todo';

export const TodoList = ({ preparedTodos }) => (
  <ul>
    {preparedTodos.map(todo => (
      <li key={todo.id}>
        <Todo todo={todo} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  preparedTodos: PropTypes.instanceOf(Object).isRequired,
};
