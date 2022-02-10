import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { Todo, User } from './types';
import { TodoList } from './components/TodoList';

const preparedTodos: Todo[] = [...todos].map((todo: Todo) => {
  const copy = { ...todo };

  copy.user = users
    .find((person: User) => person.id === copy.userId)
    || null;

  return copy;
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="page-title">Static list of todos</h1>
    <TodoList validTodos={preparedTodos} />
  </div>
);

export default App;
