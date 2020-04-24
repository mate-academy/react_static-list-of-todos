import React from 'react';
import './App.css';

import TodoList from './components/todo-list';
import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map((todo) => {
  const user = users.find(u => u.id === todo.userId);

  return { ...todo, user };
});

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <div className="info-label">
        <p>
          <span>Todos: </span>
          <span className="count">{todos.length}</span>
        </p>

        <p>
          <span>Users: </span>
          <span className="count">{users.length}</span>
        </p>
      </div>
      <div className="todo-list">
        <TodoList todoList={preparedTodos} />
      </div>
    </div>
  );
}

export default App;
