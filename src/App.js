import React from 'react';
import './App.css';
import TodoList from './TodoList';
import todos from './api/todos';
import users from './api/users';
import GetTodosWithUsers from './GetTodosWithUsers';

const preparedTodos = GetTodosWithUsers(todos, users);

function App() {
  return (
    <div className="App">
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
