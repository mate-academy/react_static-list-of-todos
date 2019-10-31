import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList';

function getTodoWithUsers(todosAll, singleUser) {
  return todosAll.map((todo) => {
    const todoUsers = { ...todo, user: singleUser.find(user => user.id === todo.userId) };

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
