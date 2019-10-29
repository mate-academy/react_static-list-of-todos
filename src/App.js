import React from 'react';
import './App.css';
import getTodosWithUsers from './api/getTodosWithUsers';
import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList';

function App() {
  return (
    <table className="App" border="1">
      <thead>
        <tr>
          <th>Item</th>
          <th>User Name</th>
          <th>Is completed</th>
        </tr>
      </thead>
      <tbody>
        <TodoList todosWithUser={getTodosWithUsers(todos, users)} />
      </tbody>
    </table>
  );
}

export default App;
