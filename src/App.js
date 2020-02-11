import React from 'react';
import './App.css';
import todos from './api/todos';
import users from './api/users';
import TodoList from './components/TodoList/TodoList';

function App() {
  const preparedTodos = todos.map((todo) => {
    const user = users.find(it => it.id === todo.userId);

    return {
      ...todo,
      user,
    };
  });

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
