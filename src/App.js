import React from 'react';
import TodoList from './todoList';
import './App.css';

import todos from './api/todos';
import users from './api/users';

function getTodosWithUsers(todosAll, usersAll) {
  function callback(todo) {
    return {
      ...todo,
      user: usersAll.find(user => user.id === todo.userId),
    };
  }

  return (
    todosAll.map(callback)
  );
}

const preparedTodos = getTodosWithUsers(todos, users);

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
