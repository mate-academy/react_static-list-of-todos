import React from 'react';
import './App.css';
import todos from './api/todos';
import users from './api/users';
import TodoList from './api/components/TodoList';

const preparedTodos = todos.map(item => (
  {
    ...item,
    user: users.find(person => (person.id === item.userId)),
  }
));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <p>
        <span>
          <strong>Todos:</strong>
        </span>
        <i>{todos.length}</i>
      </p>

      <p>
        <span>
          <strong>Users:</strong>
        </span>
        <i>{users.length}</i>
      </p>
      <TodoList preparedTodos={preparedTodos} />
    </div>
  );
}

export default App;
