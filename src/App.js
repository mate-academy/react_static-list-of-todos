import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './TodoList';

const preparedTodos = todos.map(item => ({
  ...item, user: users.find(user => user.id === item.userId),
}));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList items={preparedTodos} />
    </div>
  );
}

export default App;
