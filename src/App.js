import React from 'react';
import { TodoList } from './components/TodoList/TodoList';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = users.map(user => ({
  fullName: user.name,
  id: user.id,
  tasks: todos.filter(task => task.userId === user.id).map(task => ({
    title: task.title,
    completed: task.completed ? 'Yes' : 'No',
    id: task.id,
  })),
}));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList prepTodos={preparedTodos} />
      <br />
      <p>
        <span>Todos: </span>
        {todos.length}
      </p>

      <p>
        <span>Users: </span>
        {users.length}
        <br />
      </p>
    </div>
  );
}

export default App;
