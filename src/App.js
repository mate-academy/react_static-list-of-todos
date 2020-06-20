import React from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';

function findTodo(userId, name) {
  const userTodos = todos.filter(user => user.userId === userId);

  return userTodos.map(user => ({
    name,
    title: user.title,
    completed: user.completed,
    id: user.id,
  }));
}

const preparedTodos = users
  .map(user => findTodo(user.id, user.name)).flat();

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <p>
        <span>Todos: </span>
      </p>
      <TodoList list={preparedTodos} />
      <p>
        <span>Users: </span>
        {users.length}
      </p>
    </div>
  );
}

export default App;
