import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './TodoList/TodoList';

function App() {
  const preparedTodos = todos.map(el => ({
    ...el, user: users.find(user => user.id === el.userId),
  }));

  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todo={preparedTodos} />
    </div>
  );
}

export default App;
