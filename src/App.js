import React from 'react';
import './App.css';

import TodoList from './Components/TodoList';

import todos from './api/todos';
import users from './api/users';

function App() {
  const preparedTodos = todos.map(todo => ({
    ...todo,
    user: users.find(person => person.id === todo.userId),
  }));

  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <table className="table_wrapper">
        <thead>
          <tr>
            <th>User</th>
            <th>Todo</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <TodoList todosList={preparedTodos} />
        </tbody>
      </table>

    </div>
  );
}

export default App;
