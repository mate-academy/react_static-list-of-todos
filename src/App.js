import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList/TodoList';

const preparedTodods = todos.map(todo => (
  {
    ...todo,
    user: users.find(user => todo.userId === user.id),
  }
));

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <p className="app__count">
        <span>Todos: </span>
        {todos.length}
      </p>

      <p className="app__count">
        <span>Users: </span>
        {users.length}
      </p>

      <TodoList list={preparedTodods} />
    </div>
  );
}

export default App;
