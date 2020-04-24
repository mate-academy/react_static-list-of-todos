import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import { CoverItem } from './CoverItem';

const preparedTodos = todos.map(tod => ({
  ...tod,
  user: users.find(user => user.id === tod.userId),
}));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <ul className="list">
        {preparedTodos.map(item => <CoverItem {...item} key={item.id} />)}
      </ul>
    </div>
  );
}

export default App;
