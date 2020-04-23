import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList';

const preparedTodos = todos.map((item) => {
  const tempObj = { ...item };

  tempObj.user = users.find(user => (user.id === tempObj.userId));

  return tempObj;
});

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <p>
        <span>Todos: </span>
        {todos.length}
      </p>
      <TodoList preparedTodos={preparedTodos} />
      <p>
        <span>Users: </span>
        {users.length}
      </p>
    </div>
  );
}

export default App;
