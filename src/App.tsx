import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(todoItem => {
  return {
    ...todoItem,
    user: users.find((user) => user.id === todoItem.userId) || null,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__caption">Static list of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
