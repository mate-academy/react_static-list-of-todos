import React from 'react';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

import './App.scss';

const preparedTodos = todos.map(
  item => ({
    ...item,
    user: users.find(person => (person.id === item.userId)),
  }),
);

function App() {
  return (
    <div className="App">
      <h1 className="App__title">Static list of todos</h1>
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
