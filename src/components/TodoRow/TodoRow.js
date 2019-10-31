import React from 'react';

import TodoItem from '../TodoItem/TodoItem';
import TodoUser from '../TodoUser/TodoUser';
import TodoResult from '../TodoResult/TodoResult';

const TodoRow = ({ todo, user }) => (
  <tr className ="todo__row">
    <TodoItem item = {todo.title} />
    <TodoUser user = {user.name} email = {user.email}/>
    <TodoResult result = {todo.completed} />
  </tr>
);

export default TodoRow;
