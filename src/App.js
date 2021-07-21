import React from 'react';
import './App.scss';
import { ToDoList } from './api/components/ToDoList';
import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId).name,
}));

function App() {
  return (
    <>
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
      </div>
      <table>
        <tr>
          <ToDoList tasks={preparedTodos} />
        </tr>
      </table>
    </>
  );
}

export default App;
