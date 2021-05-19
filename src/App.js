import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import TodoList from './components/TodoList/Todolist';

const prepareTodos = todos.map(todo => ({
  ...todo,
  user: users.find(person => person.id === todo.userId),
}));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList lists={prepareTodos} />
    </div>
  );
}

export default App;
