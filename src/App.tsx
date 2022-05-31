import React from 'react';
import './App.scss';
import { preparedTodos } from './components/PreparedTodos/index';
import { TodoList } from './components/TodoList/TodoList';

const App: React.FC = () => (
  <div className="App container">
    <h1 className="subtitle is-1">Static list of todos</h1>
    <TodoList todosList={preparedTodos} />
  </div>
);

export default App;
