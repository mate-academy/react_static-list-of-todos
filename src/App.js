import React from 'react';
import './App.scss';
import { TodoList } from './components/TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId),
}));

function App() {
  return (
    <div className="app">
      <h1 className="app__title">ToDo list</h1>
      <TodoList todosArr={preparedTodos} />
    </div>
  );
}

export default App;
