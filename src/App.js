import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoListFolder';

import todos from './api/todos';
import users from './api/users';

function App() {
  const preparedTodos = [...todos].map(todo => ({
    ...todo,
    user: users[todo.userId - 1],
  }));

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
