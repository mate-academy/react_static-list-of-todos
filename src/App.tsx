import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { PreparedTodos } from './react-app-env';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodos: PreparedTodos[] = todos.map(todo => ({
  ...todo,
  user: users.find(person => todo.userId === person.id) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
