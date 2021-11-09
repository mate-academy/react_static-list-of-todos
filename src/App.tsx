import React from 'react';
import './App.scss';
import { TodoList } from './Components/TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <div className="App__container">
      <h1 className="App__title">Static list of todos</h1>
      <TodoList todos={preparedTodos} />
    </div>
  </div>
);

export default App;
