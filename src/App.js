import React from 'react';
import './App.css';
import todos from './api/todos';
import users from './api/users';
import { TodoList } from './TodoList';

const preparedTodos = todos.map(tod => ({
  ...tod,
  user: users.find(user => user.id === tod.userId),
}));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList preparedTodos={preparedTodos} key={preparedTodos.id} />
    </div>
  );
}

export default App;
