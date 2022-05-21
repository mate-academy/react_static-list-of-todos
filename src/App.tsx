import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodos = todos.map(todo => {
  const userIndex = users.findIndex(user => user.id === todo.userId);

  const todoList = {
    ...todo,
    user: userIndex !== -1 ? users[userIndex] : null,
  };

  return todoList;
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
