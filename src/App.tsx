/* eslint-disable import/no-cycle */
import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { User } from './components/UserInfo/UserInfo';
import { Todo } from './components/TodoInfo/TodoInfo';
import { TodoList } from './components/TodoList/TodoList';

export interface PreparedTodo extends Todo {
  user: User | null;
}

export const preparedTodos: PreparedTodo[] = todos.map((todo) => ({
  ...todo,
  user: users.find((user) => (
    user.id === todo.userId
  )) || null,
}) as PreparedTodo);

const App: React.FC = () => (
  <div className="App">
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
