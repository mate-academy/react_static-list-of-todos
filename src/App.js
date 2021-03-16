import React from 'react';
import todos from './api/todos';
import users from './api/users';
import './App.scss';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId),
}));

function App() {
  return (
    <div className="App">
      <h1 className="App__heading">Static list of todos</h1>
      <div className="App__wrapper">
        <p className="App__element">
          <span>Todos: </span>
          {todos.length}
        </p>

        <p className="App__element">
          <span>Users: </span>
          {users.length}
        </p>
      </div>
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
