import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/todoList';

function getTodoWithUsers() {
  return todos.map((todo) => {
    const todoUsers = {
      ...todo,
      user: users.find(user => user.id === todo.userId),
    };

    return todoUsers;
  });
}

function App() {
  return (
    <>
      <div className="App">
        <h1>Static list of todos</h1>
      </div>
      <TodoList todos={getTodoWithUsers(todos, users)} />
    </>
  );
}

export default App;
