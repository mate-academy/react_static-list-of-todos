import React from 'react';
import ToDoItem from '../Item/ToDoItem';

function ToDoList({ todos }) {
  return (
    <div className="content table-dark">
      <table>
        <thead>
        <tr>
          <th className="text-info">
            #
          </th>
          <th className="text-info">
            Title
          </th>
          <th className="text-info">
            Name
          </th>
          <th className="text-info">
            Status
          </th>
        </tr>
        </thead>
        <tbody>
        {todos.map(todo => (
          <ToDoItem todo={todo} key={todo.id} />
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default ToDoList;
