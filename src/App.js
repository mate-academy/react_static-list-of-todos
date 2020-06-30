import React from 'react';
import './App.css';
import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList';

const searchId = currentTodo => ({
  ...currentTodo,
  user: users.find(user => user.id === currentTodo.userId),
});

const preparedTodos = todos.map(todo => searchId(todo));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <p>
        <span>Todos: </span>
        {todos.length}
      </p>

      <p>
        <span>Users: </span>
        {users.length}
      </p>
      <div className="content">
        <TodoList preparedTodos={preparedTodos} />
      </div>
    </div>
  );
}

export default App;
