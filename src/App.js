import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList';

function App() {
  const preparedTodos = todos.map(item => ({
    ...item,
    user: users.find(user => user.id === item.userId),
  }));

  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todo={preparedTodos} />
    </div>
  );
}

export default App;
