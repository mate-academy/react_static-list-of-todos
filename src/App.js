import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

function App() {
  const preparedTodos = [...todos].map(todo => ({
    ...todo,
    user: users.find(el => el.id === todo.userId),
  }));

  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <p>
        <span>Todo: </span>
        {todos.length}
      </p>
      <p>
        <span>Users: </span>
        {users.length}
      </p>
      <table>
        <TodoList todos={preparedTodos} />
      </table>
    </div>
  );
}

export default App;
