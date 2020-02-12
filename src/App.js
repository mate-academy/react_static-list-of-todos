import React from 'react';
import './App.css';
import List from './api/List';

import todos from './api/todos';
import users from './api/users';

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <List todos={todos} users={users} />
    </div>
  );
}

export default App;
