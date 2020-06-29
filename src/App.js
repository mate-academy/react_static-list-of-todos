import React from 'react';

import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList/TodoList';
import './App.css';

const preparedTodos = [...todos].map((todo) => {
  const user = users.find(item => item.id === todo.userId);

  return {
    ...todo, user,
  };
});

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
      <TodoList todos={preparedTodos} />
    </div>
  );
}

export default App;
