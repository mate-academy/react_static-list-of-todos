import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './components/TodoList/TodoList';

const preparedTodos = todos.map(todo => {
  const todoForUser = {
    ...todo,
    user: users.find(user => user.id === todo.userId) || null,
  };

  return todoForUser;
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="title">List of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
