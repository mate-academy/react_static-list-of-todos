import React from 'react';

function TodoItem(props) {
  return (
    <tr>
      <td>
        {props.todo.id}
      </td>
      <td>
        {props.todo.title}
      </td>
      <td>
        {props.todo.completed.toString()}
      </td>
    </tr>
  );
}

export default TodoItem ;
