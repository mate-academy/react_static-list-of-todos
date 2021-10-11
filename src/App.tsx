import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { ToDo } from './types/Todo';
import { TodoList } from './todoList/TodoList';

const preparedTodos: ToDo[] = todos.map(todo => {
  const user = users.find(person => person.id) || null;

  return { ...todo, user };
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="app">Static list of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
