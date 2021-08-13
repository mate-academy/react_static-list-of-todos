import React from 'react';
import prepareTodos from './App';

const TodoList = () => (
  <ul>
    {prepareTodos.map(todos1 => (
      <li key= {todos1.id}>
        {todos1}
       </li>
    ))}
  </ul>
);

export default TodoList;
