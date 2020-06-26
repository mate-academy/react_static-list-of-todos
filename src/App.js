import React from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';

const todosToUser = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId),
}));

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
      <TodoList list={todosToUser} />
    </div>
  );
}

export default App;
