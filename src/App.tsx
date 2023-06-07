import React from 'react';
import 'bulma';
import './App.scss';

import { TodoList } from './components/TodoList';
import { todos } from './prepareApiData';

export const App: React.FC = () => (
  <div className="App container">
    <h1 className="App__title title">Static list of todos</h1>
    <TodoList todos={todos} />
  </div>
);
