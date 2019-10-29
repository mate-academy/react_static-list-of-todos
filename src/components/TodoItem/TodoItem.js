import React from 'react';
import User from '../User/User';

function TodoItem(props) {
  // eslint-disable-next-line react/prop-types
  const { todo } = props;

  return (
    <tr>
      <td className="item-title">{todo.title}</td>
      <td className="item-user"><User user={todo.user} /></td>
      <td className="item-status">
        {todo.completed ? 'Completed' : 'In progress'}
      </td>
    </tr>

  );
}

export default TodoItem;
