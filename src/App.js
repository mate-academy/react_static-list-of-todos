import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';

const copyTodos = todos.map(todo => Object.assign({}, todo));

const preparedTodos = copyTodos.map((todo) => {
  const findUser = users.find(user => user.id === todo.userId);

  return {
    ...todo,
    user: findUser,
  };
});

export function App() {
  return (
    <div className="App">
      <h1 className="title">Static list of todos:</h1>
      <p>
        <TodoList todos={preparedTodos} />
      </p>
    </div>
  );
}
