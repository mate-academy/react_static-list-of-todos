import React from 'react';
import User from '../User/User';
import { Icon } from 'semantic-ui-react';

function ToDoItem({ todo }) {
  return (
    <tr>
      <td>{ todo.title }</td>
      <User user={todo.user} />
      <td>
        {todo.completed ? <Icon color='green' name='checkmark' /> : <Icon color='red' name='close' />}
        { todo.completed ? `Completed` : `Not completed` }
      </td>
    </tr>
  );
}

export default ToDoItem;
