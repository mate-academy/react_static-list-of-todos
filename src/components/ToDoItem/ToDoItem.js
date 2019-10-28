import React from 'react';
import User from '../User/User';
import MarkTrue from '../mark/MarkTrue';
import MarkFalse from '../mark/MarkFalse';

function ToDoItem({ todo }) {
  return (
    <tr>
      <td>{ todo.title }</td>
      <User user={todo.user} />
      <td>
        {todo.completed ? <MarkTrue /> : <MarkFalse />}
      </td>
    </tr>
  );
}

export default ToDoItem;
