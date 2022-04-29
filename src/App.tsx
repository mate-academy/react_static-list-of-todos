import React from 'react';
import { Todos } from './types/Todos';
import { TodoList } from './components/TodoList';

import './App.scss';

import todos from './api/todos';
import users from './api/users';

const preparedTodos: Todos[] = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
