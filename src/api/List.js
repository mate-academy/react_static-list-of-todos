import React from 'react';
import PropTypes from 'prop-types';
import { TodoList } from './TodoList';

export function List(props) {
  const { todoWithUser } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>User</th>
          <th>Title</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        <TodoList preparedTodos={todoWithUser} />
      </tbody>
    </table>
  );
}

List.propTypes = {
  todoWithUser: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
