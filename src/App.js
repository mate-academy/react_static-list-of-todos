import React from 'react';
import TodoList from './TodoList';
import './App.css';

import todos from './api/todos';
import users from './api/users';

function getUser(userId) {
  return users.find(user => user.id === userId);
}

const todosWithUser = todos.map(todo => (
  {
    ...todo,
    user: getUser(todo.userId),
  }));

const App = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList todos={todosWithUser} />
  </div>
);

export default App;
