import React from 'react';
import './App.css';

import { TodoList } from './components/TodoList/TodoList';
import { preparedTodos } from './components/PreparedTodos';

function App() {
  return (
    <div className="App">
      <TodoList todolist={preparedTodos} />
    </div>
  );
}

export default App;
