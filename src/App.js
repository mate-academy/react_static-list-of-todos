import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';

import TodoList from './TodoList/TodoList';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(person => todo.userId === person.id),
}));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList preparedArr={preparedTodos} />
    </div>
  );
}

export default App;
