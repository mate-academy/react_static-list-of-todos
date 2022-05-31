import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './components/TodoList';

import { PrepTodo } from './types';
// import { UserInfo } from './components/UserInfo';

const preparedTodos: PrepTodo[] = todos.map(todo => {
  const numberId = todo.userId;
  const foundedUser = users.find(user => user.id === numberId) || null;

  return {
    ...todo,
    user: foundedUser,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    {/* <UserInfo user={} /> */}
    <TodoList preparedTodos={preparedTodos} />

  </div>
);

export default App;
