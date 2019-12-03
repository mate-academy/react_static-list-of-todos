import React from 'react';

// eslint-disable-next-line react/prop-types
function TodoItem({ todo }) {
  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>{todo.user.name}</td>
      <td>{todo.completed ? 'Done' : 'In progress'}</td>
    </tr>
  );
}

export default TodoItem;
