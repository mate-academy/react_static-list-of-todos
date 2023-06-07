import React from 'react';
import { TodoList } from './components/TodoList';
import './App.scss';

import { todos } from './todos';

export const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>
    <TodoList todos={todos} />
  </div>
);
