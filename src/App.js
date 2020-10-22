import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId),
}));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <table>
        <thead>
          <tr>
            <th>ToDo</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <TodoList todos={preparedTodos} />
      </table>

    </div>
  );
}

export default App;
