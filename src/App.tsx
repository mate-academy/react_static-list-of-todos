import React from 'react';
import './App.scss';

import { users } from './api/users';
import { TodoList } from './TodoList/TodoList';
import { todos } from './api/todos';

const preparedTodos = todos.map(todo => {
  const { userId } = todo;
  const userLink = users.find(user => user.id === userId) || null;
  const finishEl = {
    user: userLink,
    todo,
  };

  return finishEl;
});
const App: React.FC = () => {
  return (
    <div className="App">
      <h1 className="todos-title">Static list of todos</h1>
      <TodoList arrayTodos={preparedTodos} />
    </div>
  );
};

export default App;
