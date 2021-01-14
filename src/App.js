import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';

const fullList = todos.map(todo => ({
  user: users.find(user => todo.userId === user.id),
  ...todo,
}));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <div className="App__subtitle">
        <p>
          <span>Todos: </span>
          {todos.length}
        </p>

        <p>
          <span>Users: </span>
          {users.length}
        </p>
      </div>
      <TodoList list={fullList} />
    </div>
  );
}

export default App;
