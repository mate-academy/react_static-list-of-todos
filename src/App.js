import React from 'react';
import './App.scss';
import todos from './api/todos';
import users from './api/users';
import { TodoList } from './component/TodoList';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => (user.id === todo.userId)),
}));

const App = () => (
  <div className="todo-app">
    <h1 className="todo-app__heading">Static list of todos</h1>
    <p className="todo-app__subheading">
      <span>Todos: </span>
      {todos.length}
    </p>

    <p className="todo-app__subheading">
      <span>Users: </span>
      {users.length}
    </p>

    <TodoList todoList={preparedTodos} />
  </div>
);

export default App;
