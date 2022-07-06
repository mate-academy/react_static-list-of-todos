import React from 'react';
import TodoList from './components/TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';

import './App.scss';

export const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>
    <div className="App__todo">
      <TodoList preparedTodos={preparedTodos} />
    </div>
  </div>
);

export default App;
