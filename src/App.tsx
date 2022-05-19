import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

const preparedTodos = users.map(elemUser => {
  return {
    user: elemUser || null,
    todo: todos.filter(elemTodos => elemUser.id === elemTodos.userId),
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList array={preparedTodos} />
  </div>
);

export default App;
