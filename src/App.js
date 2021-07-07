import React from 'react';
import './App.scss';
import TodoList from './components/TodoList';

import todos from './api/todos';
import users from './api/users';

export const preparedTodos = todos.map(elem => ({
  ...elem,
  user: users.find(user => user.id === elem.userId),
}));

function App() {
  return (
    <>
      <h1>Static list of todos</h1>
      <div className="app">
        <TodoList todos={preparedTodos} />
      </div>
    </>
  );
}

export default App;
