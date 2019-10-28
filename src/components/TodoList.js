import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
  return (
    <div id="wrapper">
      <table className="todo ui celled table">
        <thead className="thead">
          <th>Item</th>
          <th>User</th>
          <th>Completeness</th>
        </thead>
        <tbody>
          {props.todos.map(todo => <TodoItem todo={todo} />)}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
