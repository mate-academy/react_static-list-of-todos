import React from 'react';
import TodoList from './components/TodoList/TodoList';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId),
}));

function App() {
  return (
    <div className="App">
      <h1 className="App__heading">Static list of todos</h1>
      <p className="App__info">
        <span>Todos: </span>
        {todos.length}
      </p>

      <p className="App__info">
        <span>Users: </span>
        {users.length}
      </p>
      <TodoList preparedTodos={preparedTodos} />
    </div>
  );
}

export default App;
