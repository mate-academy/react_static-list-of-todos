import React from 'react';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './components/TodoList/TodoList';
import './App.scss';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId),
}));

function App() {
  return (
    <>
      <div className="App">
        <h1 className="app__header">Static list of todos</h1>
        <p className="app__todos">
          <span>Todos:</span>
          {todos.length}
        </p>

        <p className="app__users">
          <span>Users: </span>
          {users.length}
        </p>
      </div>
      <TodoList todos={preparedTodos} />
    </>
  );
}

export default App;
