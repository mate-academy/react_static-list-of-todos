import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

function TodoList({ todos }) {
  return (
    <div className="content">
      <table>
        <thead>
          <tr>
            <th>
              #
            </th>
            <th>
            Title
            </th>
            <th>
            Status
            </th>
            <th>
            Assigned to
            </th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
