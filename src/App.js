import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

function App() {
  const prepareTodos = todos.map(todo => ({
    ...todo,
    user: users.find(user => user.id === todo.userId),
  }));

  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList prepareTodos={prepareTodos} />
    </div>
  );
}

export default App;
