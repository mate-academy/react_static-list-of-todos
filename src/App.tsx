import React from 'react';
import './App.scss';

import preparedTodos from './api/todos';
import users from './api/users';

import { TodoList } from './components/TodoList/TodoList';

const todos = preparedTodos.map(todo => (
  {
    ...todo,
    user: users.find(user => user.id === todo.userId) || null,
  }
));

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>
    <TodoList todos={todos} />
  </div>
);

export default App;
