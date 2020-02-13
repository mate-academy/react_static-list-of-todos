import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../Todo/Todo';

export function TodoList(props) {
  const { preparedTodos } = props;

  return (
    preparedTodos.map(elem => (
      <tr key={elem.id}>
        <Todo preparedTodos={elem} />
      </tr>
    ))
  );
}

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
