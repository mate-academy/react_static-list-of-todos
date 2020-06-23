import React from 'react';
import './App.css';
import './components/css/User.css';
import './components/css/Todo.css';
import { TodoList } from './components/js/TodoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(todo => (
  {
    ...todo,
    user: users.find(person => person.id === todo.userId),
  }
));

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

      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
