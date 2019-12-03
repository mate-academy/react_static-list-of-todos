import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';

import TodoList from './TodoList';

function getTodosWithUsers(todosList, usersList) {
  return todosList.map(
    todo => ({
      ...todo,
      user: usersList.find(user => user.id === todo.userId),
    })
  );
}

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todos={getTodosWithUsers(todos, users)} />
    </div>
  );
}

export default App;
