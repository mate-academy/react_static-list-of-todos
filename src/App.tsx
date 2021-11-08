import React from 'react';
import './App.scss';
import { TodoList } from './components';
import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(todo => {
  const userRefference = users.find(user => todo.userId === user.id) || null;
  const preparedTodo = { user: userRefference, ...todo };

  return preparedTodo;
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
