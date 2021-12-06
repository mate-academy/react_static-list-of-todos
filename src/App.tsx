import React from 'react';
import './App.scss';

import todos from './api/Todos';
import users from './api/Users';
import { TodoList } from './Components/TodoList/TodoList';

const preparedTodos = todos.map(todo => {
  return {
    ...todo,
    user: users.find(user => user.id === todo.userId) || null,
  };
});

const App: React.FC = () => (
  <div className="App">
    <TodoList preparedTodos={preparedTodos} />
  </div>
);

export default App;
