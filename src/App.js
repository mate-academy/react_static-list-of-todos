import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';

import TodoList from './components/TodoList';

function App() {
  const preparedTodos = todos.map(task => ({
    ...task,
    user: users.find(person => person.id === task.userId),
  }));

  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todoList={preparedTodos} />
    </div>
  );
}

export default App;
