import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList';

const PreparedList = todos.map(item => ({
  ...item,
  user: users.find(user => user.id === item.userId),
}));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todos={PreparedList} />
    </div>
  );
}

export default App;
