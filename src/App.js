import React from 'react';
import './App.scss';
import todos from './api/todos';
import users from './api/users';
import { TodosList } from './components/TodosList';

const preparedTodos = todos.map(todo => (
  {
    ...todo,
    user: users.find(user => user.id === todo.userId),
  }));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodosList preparedTodos={preparedTodos} />
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
