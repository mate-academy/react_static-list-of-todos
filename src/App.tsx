import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList/TodoList';
import { TodoWithUser } from './types/types';

import todos from './api/todos';
import users from './api/users';

const preparedTodos: TodoWithUser[] = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <div className="App__block">
      <h1>Static list of todos</h1>
      <TodoList todos={preparedTodos} />
    </div>
  </div>
);

export default App;
