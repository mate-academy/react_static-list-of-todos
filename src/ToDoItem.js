import React from 'react';
import User from './User';

const ToDoItem = ({ todo: { title, user, completed } }) => (
  <tr style={{ borderBottom: '1px solid grey' }}>
    <td style={{ backgroundColor: completed ? '#ADFF2F' : '#FFA07A' }}>
      {title}
    </td>
    <User user={user} />
    <td style={{ paddingLeft: '10px', color: completed ? 'green' : 'red' }}>
      {completed ? 'Done' : 'inProgress'}
    </td>
  </tr>
);

export default ToDoItem;
