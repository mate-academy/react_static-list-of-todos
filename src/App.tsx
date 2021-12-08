import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './components/TodoList';

const preparedTodos = todos.map((todo) => {
  const userById = users.find(({ id }) => todo.userId === id);
  const user = userById || null;

  return { ...todo, user };
});

const App: React.FC = () => (
  <div className="App">
    <TodoList todoArr={preparedTodos} />
  </div>
);

export default App;
