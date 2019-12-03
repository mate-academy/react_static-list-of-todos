import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodoList({ todos }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="table__heading">Title</th>
          <th className="table__heading">User</th>
          <th className="table__heading">Complete</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo => <TodoItem todo={todo} key={todo.id} />)}
      </tbody>
    </table>
  );
}

TodoList.propTypes
  = { todos: PropTypes.oneOfType([PropTypes.array]).isRequired };

export default TodoList;
