import React from 'react';
import './App.scss';
import preparedTodos from './api/components/preparedTodos';
import { TodoList } from './api/components/TodoList/TodoList';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1 className="App__chapter">Static list of todos</h1>
      <TodoList todos={preparedTodos} />
    </div>
  );
};

export default App;
