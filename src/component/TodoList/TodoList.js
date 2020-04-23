import React from 'react';
import PropTypes from 'prop-types';

import { Todo } from '../Todo/Todo';

export function TodoList({ list }) {
  return (
    <ul>
      {list.map(todos => (
        <li key={todos.id}>
          <Todo todo={todos} />
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.objectOf({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
