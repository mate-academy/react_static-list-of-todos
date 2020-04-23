import React from 'react';
import './App.css';
import TodoList from './TodoList';
import todos from './api/todos';
import users from './api/users';

function App() {
  const newTodos = todos.map(todo => ({
    ...todo,
    user: users.find(user => user.id === todo.userId),
  }));

  return (
    <div className="App">
      <h1 className="header__text">Static list of todos</h1>
      <TodoList todo={newTodos} />
    </div>
  );
}

export default App;
