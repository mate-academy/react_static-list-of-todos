/* eslint-disable no-console */
import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

import todos from './api/todos';
import users from './api/users';

function findUserTodo(userId, name) {
  const userTodos = todos.filter(user => user.userId === userId);
  const todoForUser = userTodos
    .map(user => [name, user.title, user.completed, user.id]);

  return todoForUser;
}

const almostPreparedTodos = users.map(user => findUserTodo(user.id, user.name));
const preparedTodos = almostPreparedTodos.flat();

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <p>
        <span>Todos: </span>
      </p>
      <ul>
        <TodoList list={preparedTodos} />
      </ul>
      <p>
        <span>Users: </span>
        {users.length}
      </p>
    </div>
  );
}

export default App;
