import React from 'react';
import { ToDoList } from './components/ToDoList';

import './App.scss';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(person => person.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <h1 className="Title">Static list of todos</h1>
    <ToDoList todos={preparedTodos} />
  </div>
);

export default App;
