import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => (
  <table className="todos">
    <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Complete</th>
        <th>User</th>
      </tr>
    </thead>
    <tbody>
      {todos.map(todoItem => <TodoItem todo={todoItem} />)}
    </tbody>
  </table>
);

TodoList.propTypes = { todos: PropTypes.string.isRequired };

export default TodoList;
