import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos }) => (
  <div>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <Todo {...todo} />
        </li>
      ))}
    </ul>
  </div>
);

export default TodoList;
