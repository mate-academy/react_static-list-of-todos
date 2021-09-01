import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './TodoList';

const preparedTodos = todos.map((todo) => {
  const user = users.find(person => person.id === todo.userId) || null;
  const preparedTodo = { ...todo, user };

  return preparedTodo;
});

const App: React.FC = () => (
  <div className="App">
    <h1> List of Todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
