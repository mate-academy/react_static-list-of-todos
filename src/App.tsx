import React from 'react';
import './App.scss';

import { TodoList } from './components/TodoList';
import { preparedTodos } from './components/PreparedTodos';

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList listOfTodos={preparedTodos} />
  </div>
);

export default App;

