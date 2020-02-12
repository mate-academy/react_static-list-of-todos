import React from 'react';
import './App.css';
import { List } from './api/List';

import todos from './api/todos';
import users from './api/users';

function App() {
  const todoWithUser = todos.map(todo => (
    {
      ...todo,
      user: users.filter(user => user.id === todo.userId),
    }
  ));

  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <List todoWithUser={todoWithUser} />
    </div>
  );
}

export default App;
