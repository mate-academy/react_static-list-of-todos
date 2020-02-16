import React from 'react';
import './App.css';
import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList/TodoList';
import getTodosWithUsers from './components/getTodos';

function App() {
  const todosAndUsers = getTodosWithUsers(todos, users);

  return (
    <div>
      <TodoList todos={todosAndUsers} />
    </div>
  );
}

export default App;
