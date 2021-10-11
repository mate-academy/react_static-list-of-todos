import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './components';
import { TodoWithUser } from './types';

const preparedTodos: TodoWithUser[] = todos.map(todo => {
  const user = users.find(person => person.id === todo.userId) || null;

  return {
    ...todo, user,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="list-group-title">Static list of todos</h1>
    <TodoList data={preparedTodos} />
  </div>
);

export default App;
