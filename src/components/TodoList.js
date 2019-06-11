import React from 'react';
import {todos} from './todo';
import TodoItem from './TodoItem';
import './TodoList.css';


function TodoList() {
  const todosList = [];

  for (const todo of todos) {
    todosList.push(
      <TodoItem title={todo.title} userId={todo.userId} status={todo.completed} key={todo.title}/>
    )
  }

  return (
    <div>
    <span className="th-todos">Todos</span><span className="th-name">Name</span><span className="th-status">Status</span>
    {todosList}
    </div>
  );
}

export default TodoList;
