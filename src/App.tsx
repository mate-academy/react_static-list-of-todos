import React from 'react';
import './App.scss';
import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';
import { TodoWithUser } from './types/TodoWithUser';

const preparedTodos = JSON.parse(JSON.stringify(todos));

/* eslint-disable no-param-reassign */

preparedTodos.forEach((todo: TodoWithUser) => {
  todo.user = (users.find(user => todo.userId === user.id))
    ? todo.user = users.find(user => todo.userId === user.id)
    : todo.user = null;
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList todosList={preparedTodos} />
  </div>
);

export default App;
