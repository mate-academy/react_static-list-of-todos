import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

import todos from './api/todos';
import users from './api/users';

function App() {
  const preparedTodos = todos.map(item => ({
    ...item,
    user: users.find(user => user.id === item.userId),
  }));

  return (
    <div className="todo__container">
      <h1 className="todo__header">Static list of todos</h1>
      <TodoList todo={preparedTodos} />
    </div>
  );
}

export default App;
