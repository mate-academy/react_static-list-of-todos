import React from 'react';
import './App.scss';
import { TodoList } from './components/todoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(person => (
    person.id === todo.userId
  )).name,
}));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList entries={preparedTodos} />
    </div>
  );
}

export default App;
