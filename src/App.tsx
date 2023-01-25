import React from 'react';
import './App.scss';

import { TodoList } from './components/TodoList';
import { todos } from './Helpers/todos';

export const App: React.FC = () => (
  <div className="App">
    <TodoList todos={todos} />
  </div>
);
