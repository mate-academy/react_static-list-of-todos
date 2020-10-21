import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { ToDoList } from './components/ToDoList';

const preparedTodos = todos.map((todo) => {
  const currentUser = users.find(user => user.id === todo.userId);

  return {
    ...todo,
    user: currentUser,
  };
});

function App() {
  return (
    <main className="App">
      <h1>Static list of todos</h1>
      <ToDoList todos={preparedTodos} />
    </main>
  );
}

export default App;
