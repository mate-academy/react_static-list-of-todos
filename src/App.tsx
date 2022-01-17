import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { TodosList } from './components/TodosList/TodosList';

const preparedTodos: Todo[] = todos.map(todo => ({
  ...todo,
  user: users.find(user => todo.userId === user.id) || null,
}));

const App: React.FC = () => (
  <p className="App">
    <h1 className="App__title">Static list of todos</h1>
    <TodosList todos={preparedTodos} />
  </p>
);

export default App;
