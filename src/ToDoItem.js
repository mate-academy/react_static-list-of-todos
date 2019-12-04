import React from 'react';
import User from './User';

const ToDoItem = ({ todo: { title, user, completed } }) => (
  <tr>
    <td style={{ backgroundColor: completed ? '#ADFF2F' : '#FFA07A' }}>
      {title}
    </td>
    <User userData={user} />
    <td style={{ color: completed ? 'green' : 'red' }}>
      {completed ? 'Done' : 'inProgress'}
    </td>
  </tr>
);

export default ToDoItem;
