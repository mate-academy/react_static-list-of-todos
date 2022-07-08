import React from 'react';

import './App.scss';

import todosFromServer from './api/todos';
import usersFromServer from './api/users';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodos = todosFromServer.map(todo => ({
  ...todo,
  user: usersFromServer.find(user => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <h1 className="main-title">Status List of To Do</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
