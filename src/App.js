import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './components/TodoList';

export const preparedTodos = todos.map((todo) => {
  const user = users.find(user1 => user1.id === todo.userId);

  return {
    ...todo,
    user,
  };
});

function App() {
  return (
    <div className="app">
      <h1 className="app__header">Static list of todos</h1>
      <p className="app__statistic">
        <span>Todos: </span>
        {todos.length}
      </p>

      <p className="app__statistic">
        <span>Users: </span>
        {users.length}
      </p>
      <div className="app__todos-list">
        <TodoList todos={preparedTodos} />
      </div>
    </div>
  );
}

export default App;
