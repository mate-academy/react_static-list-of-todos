import React from 'react';
import './App.scss';
import { TodoList } from './components/Todo/TodoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(todo => {
  const user = users.find(({ id }) => id === todo.userId)
    || null;

  return {
    ...todo,
    user,
  };
});

const App: React.FC = () => (
  <div className="App">
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
