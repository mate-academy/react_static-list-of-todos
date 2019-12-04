import PropTypes from 'prop-types';
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => (

  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Complete</th>
        <th>User</th>
      </tr>
    </thead>
    <tbody>
      {todos.map(todo => (
        <TodoItem
          todo={todo}
          key={todo.id}
        />
      ))}
    </tbody>
  </table>
);

TodoList.propTypes = {
  todos: PropTypes.oneOfType([PropTypes.array])
    .isRequired,
};

export default TodoList;
