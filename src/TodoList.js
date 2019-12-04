import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

// eslint-disable-next-line react/prop-types
const TodoList = ({ todos }) => (
  <table className="Table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>User name</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {todos.map(todo => <TodoItem todo={todo} key={todo.id} />)}
    </tbody>
  </table>
);

TodoList.propType = { todos: PropTypes.object.isRequired };

export default TodoList;
