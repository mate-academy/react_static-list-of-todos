import React from 'react';

const TodoList = ({ preparedTodos }) => (
  <ul>
    {preparedTodos.map(todo => (
      <li key= {todo.id}>
        {todo}
       </li>
    ))}
  </ul>
);

export default TodoList;
