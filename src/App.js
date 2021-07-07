import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';
import { readyTodosList } from './components/ReadyTodosList';

const readyList = readyTodosList(todos, users);

const App = () => (
  <div className="App">
    <TodoList readyTodos={readyList} />
  </div>
);

export default App;
