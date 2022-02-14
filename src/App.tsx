import React from 'react';
import './App.scss';
import { preaparedTodos } from './api/preparedTodos';
import { TodoList } from './components/TodosList/TodoList';
// import todos from './api/todos';
// import users from './api/users';

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <div className="todos">
      <TodoList todos={preaparedTodos} />
    </div>
  </div>
);

export default App;
