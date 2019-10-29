import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/todoList';

function getTodoWithUsers(sodot, sresu) {
  return sodot.map((todo) => {
    const todoUsers = {
      ...todo,
      user: sresu.find(user => user.id === todo.userId),
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
