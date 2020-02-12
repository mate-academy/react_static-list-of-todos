import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';

import TodoList from './components/TodoList/TodoList';

const preparedTodos = todos.map(todo => (
  {
    ...todo,
    user: users.find(user => user.id === todo.userId),
  }
));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <table className="tableWrapper">
        <thead>
          <tr className="tableTitle">
            <th className="tableCell">User</th>
            <th className="tableCell">Todo</th>
            <th className="tableCell">Status</th>
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
