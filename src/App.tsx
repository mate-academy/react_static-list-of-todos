import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(todo => {
  const userIndex = users.findIndex(user => user.id === todo.userId);

  const todoNew = {
    ...todo,
    user: userIndex !== -1 ? users[userIndex] : null,
  };

  return todoNew;
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList todosList={preparedTodos} />
  </div>
);

export default App;
