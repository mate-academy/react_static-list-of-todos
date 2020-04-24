import React from 'react';
import './App.css';
import { TodoList } from './components/TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';

function App() {
  const preparedTodos = todos.map(todo => ({
    ...todo,
    user: users.find(person => person.id === todo.userId),
  }));

  return (
    <>
      <div className="App">
        <h1>Static list of todos</h1>
      </div>
      <TodoList todos={preparedTodos} />
    </>
  );
}

export default App;
