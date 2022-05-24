import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './components/TodoList';

const preparedTodos = todos.map((todo) => {
  const findUser = users.find((user) => user.id === todo.userId);

  return { ...todo, user: findUser || null };
});

const App: React.FC = () => (
  <div className="App">
    <div className="container">
      <h1>Static list of todos</h1>
      <TodoList todos={preparedTodos} />
    </div>
  </div>
);

export default App;
