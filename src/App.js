import React from 'react';
import './App.css';
import todos from './api/todos';
import users from './api/users';
import TodoList from './components/todo_list/TodoList';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users[todo.userId - 1],
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
      <TodoList preparedTodos={preparedTodos} />
    </>
  );
}

export default App;
