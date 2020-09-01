import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList/TodoList';

function App() {
  const prepearedTodos = todos.map((todo) => {
    const person = users.find(user => user.id === todo.userId);

    return {
      ...todo,
      person,
    };
  });

  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todos={prepearedTodos} />
    </div>
  );
}

export default App;
