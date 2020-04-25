import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import GreateList from './GreateList';

const preparedTodos = todos.map(item => ({
  ...item, user: users.find(user => user.id === item.userId),
}));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <ol>
        <GreateList items={preparedTodos} />
      </ol>
    </div>
  );
}

export default App;
