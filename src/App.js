import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList';
import todos from './api/todos';
import users from './api/users';

export const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => todo.userId === user.id),
}));

function App() {
  return (
    <>
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
      </div>
      <TodoList preparedTodos={preparedTodos} />
    </>
  );
}

export default App;
