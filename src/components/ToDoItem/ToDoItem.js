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
        {todo.completed ? (
          <Icon color='green' name='checkmark' />
          ) : ( <Icon color='red' name='close' />}
          )
      </td>
    </tr>
  );
}

export default ToDoItem;
