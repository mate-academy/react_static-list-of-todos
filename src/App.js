import React from 'react';
import TodoList from './TodoList';
import './App.css';

import todos from './api/todos';
import users from './api/users';

const todosWithUsers = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId),
}));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todos={todosWithUsers} />
    </div>
  );
}

export default App;
