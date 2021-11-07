import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList/TodoList';
import { TodoUser } from './types/types';

import todos from './api/todos';
import users from './api/users';

const preparedTodos: TodoUser[] = todos.map(element => ({
  ...element,
  user: users.find(user => user.id === element.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <div className="App__block">
      <h1>Static list of todos</h1>
      <TodoList todoList={preparedTodos} />
    </div>
  </div>
);

export default App;
