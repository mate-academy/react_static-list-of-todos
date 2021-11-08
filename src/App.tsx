import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoWithUser } from './types/types';
import { TodoList } from './component/TodoList/TodoList';

const preparedTodos: TodoWithUser[] = todos.map((todo) => {
  return {
    ...todo,
    user: users.find(user => user.id === todo.userId) || null,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
