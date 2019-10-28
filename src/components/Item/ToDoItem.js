import React from 'react';
import ToDoUser from '../User/ToDoUser';

function ToDoItem({todo}) {
  return (
      <tr>
        <td>
          {todo.id}
        </td>
        <td>
          {todo.title}
        </td>
        <td>
          <ToDoUser user={todo.user} />
        </td>
        <td>
          {todo.completed ? (<span className="text-success">Completed</span>)
            : <span className="text-danger">In Progress</span>}
        </td>
      </tr>

  );
}

export default ToDoItem;
