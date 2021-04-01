import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

const preparedTodos = todos.map((todo) => {
  const user = users.find(person => person.id === todo.userId);
  const copyTodo = { ...todo };

  copyTodo.user = user.name;

  return copyTodo;
});

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
      <TodoList todos={preparedTodos} />
    </>
  );
}

export default App;
