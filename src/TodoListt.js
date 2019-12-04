import React from 'react';
import TodoItem from './TodoItem';
import { todosUsers } from './App';

function TodoListt() {
  return (
    <div className="App">
      <h1 className="App__title">Static list of todos</h1>
      <ul className="App__ul">
        <TodoItem todosUsers={todosUsers} />
      </ul>
    </div>
  );
}

export default TodoListt;
