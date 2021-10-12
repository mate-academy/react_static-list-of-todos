import React from 'react';
import './App.scss';

import { TodoList } from './components/TodoList';
import { preparedTodos } from './types/preparedTodos';

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList todoList={preparedTodos} />
  </div>
);

export default App;
