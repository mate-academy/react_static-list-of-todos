import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';
import { prepareTodos } from './utilities/prepareTodos';

const preparedTodos = prepareTodos(todos, users);

function App() {
  return (
    <div className="App">
      <h1>Static Todo List</h1>
      <TodoList list={preparedTodos} />
    </div>
  );
}

export default App;
