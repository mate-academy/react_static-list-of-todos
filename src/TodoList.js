import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => (
  <table className="table">
    <thead>
      <tr className="title">
        <th>ID</th>
        <th>Title</th>
        <th>User</th>
      </tr>
    </thead>
    <tbody className="tbody">
      {todos.map(todo => (
        <TodoItem todo={todo} />
      ))}
    </tbody>
  </table>

);

TodoList.propTypes = { todos: PropTypes.string.isRequired };

export default TodoList;
