import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodos = todos.map((todo) => {
  const user = users.find(person => todo.userId === person.id);

  return {
    ...todo,
    user,
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
      <TodoList prepTodos={preparedTodos} />
    </div>
  );
}

export default App;
