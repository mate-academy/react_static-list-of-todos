import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './components/TodoList';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId),
}));

function App() {
  return (
    <div className="App">
      <h1 className="usersInfo">Static list of todos</h1>
      <p className="usersInfo">
        <span>Todos: </span>
        {todos.length}
      </p>

      <div className="usersInfo">
        <span>Users: </span>
        {users.length}

        <TodoList todoList={preparedTodos} />
      </div>
    </div>
  );
}

export default App;
