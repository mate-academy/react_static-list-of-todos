import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList/TodoList';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(u => u.id === todo.userId),
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <ul className="App__list">
      <TodoList todos={preparedTodos} />
    </ul>
  </div>
);

export default App;
