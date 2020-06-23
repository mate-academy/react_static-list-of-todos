import React from 'react';
import { TodoList } from './TodoList/TodoList';
import './App.css';
import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(todo => (
  {
    ...todo,
    user: users.find(user => user.id === todo.userId),
  }
));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todosList={preparedTodos} />
    </div>
  );
}

export default App;
