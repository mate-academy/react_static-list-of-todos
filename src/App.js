import React from 'react';
import './App.css';
import TodoList from './Todo';
import todos from './api/todos';
import users from './api/users';

function App() {
  return (
    <div className="App">
      <TodoList todos={getTodosWithUsers(todos, users)} />
    </div>
  );
}

function getTodosWithUsers(todo, user) {
  return todo.map(i => (
    {
      ...i,
      user: user.find(person => person.id === i.userId),
    }
  ));
}

export default App;
