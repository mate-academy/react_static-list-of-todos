import React from 'react';
import './App.css';

import todos from './api/todos';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <TodoList tasks={todos} />
  );
}

export default App;
