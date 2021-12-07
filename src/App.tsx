import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList';

export const preparedTodos = todos.map((todo) => {
  return {
    ...todo, // old properties
    user: users.find(user => user.id === todo.userId) || null, // + user or null
  };
});

const App: React.FC = () => (
  <div className="App">
    <TodoList preparedTodos={preparedTodos} />
  </div>
);

export default App;
