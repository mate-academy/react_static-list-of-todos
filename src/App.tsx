import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

const preparedTodos = todos.map((todo) => {
  const user = users.find(({ id }) => id === todo.userId);

  return {
    ...todo,
    user,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="text-center">Static list of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
