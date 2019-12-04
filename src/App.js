import React from 'react';
import todos from './api/todos';
import users from './api/users';
import './App.css';

import TodoList from './components/TodoList';

function getTodosWithUsers(todoList, usersList) {
  return todoList.map(todo => ({
    ...todo,
    user: usersList.find(user => user.id === todo.userId),
  }));
}

function App() {
  return (
    <div className="App">
      <h1>LIST OF TODOS</h1>
      <TodoList todos={getTodosWithUsers(todos, users)} />
    </div>
  );
}

export default App;
