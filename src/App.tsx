import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './components/TodoList';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(person => person.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="App todo-list">
    <h1 className="todo-list__title">Static list of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
