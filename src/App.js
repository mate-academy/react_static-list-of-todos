import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './Todo';

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todos={getTodosWithUsers(todos, users)} />
    </div>
  );
}

function getTodosWithUsers(todo, people) {
  return todo.map(item => (
    {
      ...item,
      user: people.find(person => person.id === item.userId),
    }
  ));
}

export default App;
