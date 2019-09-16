import React from 'react';
import './App.css';

import apiTodos from './api/api-todos';
import apiUsers from './api/api-users';

import TodoList from './Components/TodoList/TodoList';

const preparedTodos = getTodosWithUsers(apiTodos, apiUsers);

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <p>
        <span>Todos: </span>
        {preparedTodos.length}
      </p>
      <TodoList todos={preparedTodos} />
    </div>
  );
}

function getTodosWithUsers(todos, usersList) {
  return todos.map(item => ({
    ...item,
    user: usersList.find(user => user.id === item.userId),
  }));
}

export default App;
