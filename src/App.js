import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './TodoList';

const getTodosWithUsers = (toDos, useRs) => (
  toDos.map(item => ({
    ...item,
    user: useRs.find(user => user.id === item.userId),
  }))
);

const toDosWithUses = getTodosWithUsers(todos, users);

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todos={toDosWithUses} />
    </div>
  );
}

export default App;
