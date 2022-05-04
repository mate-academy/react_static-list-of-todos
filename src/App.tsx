import React from 'react';

import { TodoList } from './components/ToDoList/TodoList';

import todos from './api/todos';
import users from './api/users';

import './App.scss';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Sorted list</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
