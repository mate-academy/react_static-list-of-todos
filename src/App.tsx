import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './TodoList/TodoList';

const preparedTodos = todos.map(todo => ({
  ...todo, user: users.find(user => todo.userId === user.id) || null,
}));

const App: React.FC = () => {
  return (
    <div className="App">
      <h1 className="app-title">Static list of todos</h1>
      <TodoList todos={preparedTodos} />
    </div>
  );
};

export default App;
