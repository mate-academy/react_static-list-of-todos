import React from 'react';
import { TodoList } from './components/TodoList';

import todos from './api/todos';
import users from './api/users';

import './App.scss';

function App() {
  const preparedTodos = todos.map((todo) => {
    const user = users.find(person => todo.userId === person.id);

    return {
      ...todo,
      user,
    };
  });

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

      <TodoList todoList={preparedTodos} />
    </div>
  );
}

export default App;
