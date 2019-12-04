import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodoList({ todos }) {
  return (
    <table className="table">
      <thead className="title">
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Status</th>
          <th>User Name</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </tbody>
    </table>
  );
}

TodoList.propTypes = { todos: PropTypes.arrayOf(PropTypes.any).isRequired };

export default TodoList;
