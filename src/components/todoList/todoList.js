import React from 'react';
import TodoItem from '../todoItem/todoItem';

function TodoList() {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Name</th>
          <th>Status</th>
          <th>Email</th>
        </tr>
      </thead>
      <TodoItem />
    </table>
  );
}

export default TodoList;
