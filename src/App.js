import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { preparedTodos } from './api/preparedTodos';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
