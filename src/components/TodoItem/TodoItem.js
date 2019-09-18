import React from 'react';
import User from '../User/User';

function TodoItem({ todo }) {
  return (
    <>
      <tr>
        <td>
          {todo.id}
        </td>
        <td>
          {todo.title}
        </td>
        <td>
          {todo.completed ? 'Done' : 'In Progress'}
        </td>
        <td>
          <User user={todo.user} />
        </td>
      </tr>
    </>
  );
}

export default TodoItem;
