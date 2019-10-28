import React from 'react';
import './App.css';
import todos from './api/todos';
import users from './api/users';
import TodoList from "./components/TodoList";

function getTodosWithUsers(todoS, userS) {
  return todoS.map(todo => {
    return (
      { ...todo, user: userS.find(user => user.id === todo.userId) }
    );
  });
}

function App() {
  return (
    <div className="App">
      <TodoList todos={getTodosWithUsers(todos, users)} />
    </div>
  );
}

export default App;
