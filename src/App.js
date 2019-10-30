import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';

import TodoList from './components/TodoList';
// import TodoItems from './components/TodoItem';
// import User from './components/User';

function getTodosWithUsers() {
  return todos.map(item => ({
    ...item,
    user: users.find(elem => elem.id === item.userId),
  }));
}

function App() {
  // const data = getTodosWithUsers();

  return (
    <>
      <TodoList todos={getTodosWithUsers()} />
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
    </>
  );
}

export default App;
