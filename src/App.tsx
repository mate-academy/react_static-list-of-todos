import React from 'react';
import { ToDoList } from './components/ToDoList';

import './App.scss';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(e => (
  {
    ...e,
    user: users.find(user => user.id === e.userId) || null,
  }
));

const App: React.FC = () => (
  <div className="App">
    <ToDoList todos={preparedTodos} />
  </div>
);

export default App;
