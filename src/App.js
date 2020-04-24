import React from 'react';
import './App.css';
import todos from './api/todos';
import users from './api/users';
import TodoList from './TodoList';

const prepared = todos.map(todo => ({
  ...todo,
  userPrepare: users.find(user => user.id === todo.userId),
}));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList currenttodos={prepared} />
    </div>
  );
}

export default App;
