import React from 'react';
import { TodoList } from './components/TodoList/TodoList';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = [...todos.map((todo) => {
  todo.user = users.find(user => user.id === todo.userId);

  return todo;
})];

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
      <TodoList listTodo={preparedTodos} />
    </div>
  );
}

export default App;
