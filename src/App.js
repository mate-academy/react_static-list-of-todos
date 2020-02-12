import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './components/TodoList/TodoList';

function addUsersInTodo(todosList, usersList) {
  const preparedTodos = todos.map(todo => ({
    ...todo,
    user: usersList.find(person => person.id === todo.userId),
  }));

  return preparedTodos;
}

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todos={addUsersInTodo(todos, users)} />
      <p>
        <span>Todos: </span>
        {todos.length}
      </p>

      <p>
        <span>Users: </span>
        {users.length}
      </p>
    </div>
  );
}

export default App;
