import React from 'react';
import './App.css';
import { TodoList } from './components/TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(todo => (
  {
    ...todo,
    user: users.find(user => user.id === todo.userId),
  }
));

function App() {
  return (
    <div className="App">
      <h1 className="App__heading">Static list of todos</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Task</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <TodoList todos={preparedTodos} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
