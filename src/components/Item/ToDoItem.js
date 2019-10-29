import React from 'react';
import ToDoUser from '../User/ToDoUser';

function ToDoItem({ todo }) {
  const {
    id, title, user, completed,
  } = todo;
  return (
      <tr>
        <td>
          {id}
        </td>
        <td>
          {title}
        </td>
        <td>
          <ToDoUser user={user} />
        </td>
        <td>
          {completed ? (<span>&#128077;</span>)
            : (<span>&#9940;</span>)}
        </td>
      </tr>

  );
}

export default ToDoItem;
