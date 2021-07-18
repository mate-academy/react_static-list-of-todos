import React from 'react';
import './App.scss';

import todos from './api/todos';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <h1 className="title">Static list of todos</h1>
      <TodoList preparedTodos={todos} />
    </div>
  );
}

export default App;
