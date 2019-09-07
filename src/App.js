import React from 'react';
import './App.css';
import todos from './api/todos';
import users from './api/users';
import TodoList from './api/component/Todolist';

const todosWithUser = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId),
}));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todos={todosWithUser} />
    </div>
  );
}

export default App;
