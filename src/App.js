import React from 'react';
import './App.css';
import TodoList from "./components/todoList/todoList"

import todos from './api/todos';
import users from './api/users';

function App() {
  let preparedTodos = todos.map(t => {
      t.user = users.find(u => u.id === t.userId);
      return t;
    });

  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <p>
        <span>Todos: </span>
        {todos.length}
      </p>
      <TodoList todoList={preparedTodos}/>
    </div>
  );
}

export default App;
