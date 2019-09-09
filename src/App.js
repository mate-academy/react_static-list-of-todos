import React from 'react';

import TodoList from './components/TodoList/TodoList';
import todos from './api/todos';
import users from './api/users';

import './App.css';

function getTodosWithUsers(todosList, usersList) {
  return todosList.map(item => ({
    ...item,
    user: usersList.find(user => user.id === item.userId),
  }));
}

function App() {
  const preparedTodos = getTodosWithUsers(todos, users);

  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <p>
        <span>Todos: </span>
        {todos.length}
      </p>

      <p>
        <span>Users: </span>
        {users.length}
      </p>
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
