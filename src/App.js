import React from 'react';
import { TodoList } from './components/TodoList';
import { Todo } from './components/Todo';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map((todo) => {
  const objUser = users.find(user => user.id === todo.userId);

  return {
    ...todo,
    user: objUser,
  };
});

function App() {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <ul>
        <TodoList preparedTodos={preparedTodos} />
      </ul>
      <ul>
        <Todo todos={todos} />
      </ul>
      <p>
        <span>Todos: </span>
        {todos.length}
      </p>

      <p>
        <span>Users: </span>
        {users.length}
      </p>
    </div>
  );
}

export default App;
