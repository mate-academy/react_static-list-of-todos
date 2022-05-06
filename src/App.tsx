import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';
import { Todo } from './components/Types/Types';

const preparedTodos = todos.map((todo) => {
  const todoCopy = {
    ...todo,
    user: users.find(user => user.id === todo.userId) || 'null',
  };

  return todoCopy;
});

export const App: React.FC = () => (
  <div className="App">
    <section className="header">
      <h1 className="header__todo">To Do</h1>
      <h1 className="header__user">User</h1>
      <h1 className="header__status">Status</h1>
    </section>
    <section className="main">
      <TodoList commonData={preparedTodos as Todo[]} />
    </section>
  </div>
);
