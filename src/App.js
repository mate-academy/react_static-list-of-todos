import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';

import TodoList from './components/TodoList';

function getTodosWithUsers() {
  return todos.map(item => ({
    ...item,
    user: users.find(elem => elem.id === item.userId),
  }));
}

function App() {
  return (
    <>
      <div className="App">
        <h1>
          Static list of todos
        </h1>
        <p>
          <span>Todos: </span>
          {todos.length}
        </p>

        <p>
          <span>Users: </span>
          {users.length}
        </p>
      </div>
      <TodoList todos={getTodosWithUsers()} />
    </>
  );
}

export default App;
