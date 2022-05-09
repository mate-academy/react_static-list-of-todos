import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList';

import todos from './api/todos';
import users from './api/users';
import { Todo } from './types/TodoTypes';

const preparedTodos: Todo[] = todos.map((todo) => {
  const copy = {
    ...todo,
    user: users.find(user => user.id === todo.userId) || null,
  };

  return copy;
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList listTodos={preparedTodos} />
  </div>
);

export default App;
