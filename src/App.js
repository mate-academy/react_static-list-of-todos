import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';

function App() {
  return todos.map((todo) => {
    const todoUser = users.find(user => user.id === todo.userId);

    return (
      <div className="todo-item">
        <h2>{todo.title}</h2>
        <p>{todo.completed ? 'Completed' : 'Not completed'}</p>
        <div className="user-info">
          <span>{todoUser.name}</span>
          <a href={`mailto:${todoUser.email}`}>{todoUser.email}</a>
        </div>
      </div>
    );
  });
}

export default App;
