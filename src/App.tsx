import React from 'react';
import './App.scss';

import todosArr from './api/todos';
import usersArr from './api/users';
import { TodoList } from './components/TodoList/TodoList';

const todos = todosArr.map(todo => ({
  ...todo,
  user: usersArr.find(user => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <h1 className="main_title">Static list of todos</h1>
    <TodoList todos={todos} />
  </div>
);

export default App;
