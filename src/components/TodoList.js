import React from 'react';
import { todos } from './todos.js';
import TodoItem from './TodoItem.js';

const TodoList = () => {
  const listToAdd = [];

  todos.forEach(todo => {
    listToAdd.push(
      <TodoItem title={todo.title} status={todo.completed} id={todo.userId} />
    );
  });
  return <div className='main-container'>{listToAdd}</div>;
};

export default TodoList;
