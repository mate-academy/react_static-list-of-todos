import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

function App() {
  const preparedTodos = todos.map(el => ({
    ...el,
    user: { ...users[el.userId - 1] },
  }));

  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <div>
        <TodoList preparedTodos={preparedTodos} />
      </div>
    </div>
  );
}

export default App;
