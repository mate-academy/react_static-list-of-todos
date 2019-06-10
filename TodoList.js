import React from 'react';
import { todos } from './todos.js';
import { users } from './users.js';
import TodoItem from './todoItem.js';

function TodoList() {
  const todoList = [];
  for (const itemTodo of todos) {
    const userName = users.find(user => user.id === itemTodo.userId).name;
    const status = itemTodo.completed ? 'Done' : 'Not yet';
    todoList.push(
      <TodoItem title={itemTodo.title} user={userName} status={status} key={itemTodo.title} />
    );
  }
  
  return todoList;
}

export default TodoList;
