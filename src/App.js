import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList';

function getTodoWithUsers(todoS, userS) {
  return todoS.map((todo) => {
    const todoUsers = { ...todo, user: userS.find(user => user.id === todo.userId) };

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
