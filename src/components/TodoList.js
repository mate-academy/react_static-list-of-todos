/* eslint-disable react/prop-types */

import React from 'react';

const TodoList = props => (
  <ul>
    {props.todos.map(todo => (
      <li>
        {todo.id}
        .
        {todo.title}
      </li>
    ))}
  </ul>
);

export default TodoList;
