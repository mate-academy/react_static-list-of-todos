import React from 'react';
import TodoList from './TodoList';
import './App.css';

import todos from './api/todos';
import users from './api/users';

const getTodosWithUsers = (toDos, useRs) => (
  toDos.map(item => ({
    ...item,
    user: useRs.find(user => user.id === item.userId),
  }))
);

const preparedTodos = getTodosWithUsers(todos, users);

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
