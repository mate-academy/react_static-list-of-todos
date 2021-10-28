import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

const preparedTodos = todos.map(todo => {
  const user = users.find(({ id }) => todo.userId === id) || null;

  return { ...todo, user };
});

const App: React.FC = () => (
  <div className="App">
    <div className="container">
      <h1 className="title">React Static list of todos</h1>

      <TodoList preparedTodos={preparedTodos} />
    </div>
  </div>
);

export default App;
