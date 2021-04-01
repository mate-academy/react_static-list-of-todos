import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo';

export const TodoList = ({ preparedTodos }) => (
  <ul>
    {preparedTodos.map(item => (
      <li key={item.id}>
        <Todo {...item} />
      </li>
    ))}
    ;
  </ul>
);

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
