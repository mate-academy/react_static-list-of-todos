import React from 'react';
import './App.css';

import todos from './api/todos';
import TodoList from "./component/TodoList";

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>

<TodoList data = {todos}/>

    </div>
  );
}

export default App;
