import React from 'react';
import './App.scss';
import TodoList from './components/TodoList/TodoList';
import { preparedTodos } from './types/Preraredtodo';

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
