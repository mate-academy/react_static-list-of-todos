/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { Todo } from './components/Types/Todo';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodos: Todo[] = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <header className="header">
      <h1 className="header__title">Static list of todos</h1>
    </header>
    <div className="container">
      <TodoList todos={preparedTodos} />
    </div>
  </div>
);

export default App;
