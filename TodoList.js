import React from 'react';
import { todos } from './todos.js';
import TodoItem from './TodoItem.js';


function Todolist() {
  const allTodoItems = [];

  todos.map(item => {
    allTodoItems.push(
      <TodoItem currentTodo={item} key={item.id} />
    );
  });

  return (
    allTodoItems
  )
}

export default Todolist;

