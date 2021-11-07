import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodos = todos.map(todosElement => ({
  ...todosElement,
  user: users.find(usersElement => usersElement.id === todosElement.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>
    <TodoList preparedTodos={preparedTodos} />
  </div>
);

export default App;
