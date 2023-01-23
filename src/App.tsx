import React from 'react';
import './App.scss';

import { todos } from './api/todos-with-users';
import { TodoList } from './components/TodoList';

export const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>

    <TodoList todos={todos} />
  </div>
);
