import React from 'react';
import './App.css';
import TodoList from './Components/TodoList/TodoList';
import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(task => ({
  ...task,
  user: users.find(person => person.id === task.userId),
}));

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
      <TodoList tasks={preparedTodos} />
    </div>
  );
}

export default App;
