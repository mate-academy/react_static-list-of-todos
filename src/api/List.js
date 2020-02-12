import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './TodoList';

function List(props) {
  const { todos, users } = props;
  const preparedTodos = users.map(user => (
    {
      [user.name]: todos.filter(item => item.userId === user.id),
    }
  ));

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
        <TodoList preparedTodos={preparedTodos} />
      </tbody>
    </table>
  );
}

List.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape).isRequired,
  users: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default List;
