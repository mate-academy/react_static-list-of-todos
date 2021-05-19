import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(el => ({
  ...el,
  user: users.find(user => user.id === el.userId),
}));

function App() {
  return (
    <div className="app">
      <TodoList todosArr={preparedTodos} />
    </div>
  );
}

export default App;
