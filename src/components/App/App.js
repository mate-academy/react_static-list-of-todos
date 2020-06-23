import React from 'react';
import './App.css';
import { List } from '../List/List';

import todos from '../../api/todos';
import users from '../../api/users';

function App() {
  const todoWithUser = todos.map(todo => (
    {
      ...todo,
      user: users.find(user => user.id === todo.userId),
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
