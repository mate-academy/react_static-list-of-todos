import React from 'react';
import './App.scss';

import { TodoList } from './components/TodoList';
import { todos } from './prepareApiData';

export const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>
    <TodoList todosList={todos} />
  </div>
);
