import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { Todo } from './types';
import TodoList from './TodoList/TodoList';

const App: React.FC = () => {
  const preparedTodos: Array<Todo> = todos.map(e => {
    return {
      ...e,
      user: users.find(user => user.id === e.userId) || null,
    };
  });

  return (
    <div className="App">
      <h1 className="title">Static list of todos</h1>
      <TodoList preparedTodos={preparedTodos} />
    </div>
  );
};

export default App;
