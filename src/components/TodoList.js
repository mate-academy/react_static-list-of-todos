/* eslint-disable react/prop-types */

import React from 'react';
import TodoItem from './TodoItem';

const TodoList = props => (
  <ul>
    {props.todos.map(todo => <TodoItem todo={todo} />)}
  </ul>
);

export default TodoList;
