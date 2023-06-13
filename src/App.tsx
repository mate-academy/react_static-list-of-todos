import React from 'react';
import './App.scss';

import todosFromServer from './api/todos';

import { TodoList } from './components/TodoList';

export const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>

    <TodoList todos={todosFromServer} />

  </div>
);
