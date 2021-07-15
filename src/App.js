import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodolIst/TodoList';

const DataName = [];

todos.map(y => users.map(x => (x.id === y.userId)
  && DataName.push(
    {
      id: y.id,
      name: x.name,
      title: y.title,
      completed: y.completed,
    },
  )));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList props={DataName} />
    </div>
  );
}

export default App;
