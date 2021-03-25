import React from 'react';
import './App.scss';
import { TodoList } from './component/TodoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => todo.userId === user.id).name,
}));

const App = () => (
  <div className="app">
    <h1>Static list of todos</h1>
    <p className="app__todos">
      <span>Todos: </span>
      {todos.length}
    </p>

    <p className="app__todos">
      <span>Users: </span>
      {users.length}
    </p>
    <TodoList
      todoList={preparedTodos}
    />
  </div>
);

export default App;
