import React from 'react';
import { TodoList } from '../TodoList/TodoList';
import './App.scss';

import todos from '../../api/todos';
import users from '../../api/users';

const preparedTodos = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId),
}));

function App() {
  return (
    <div className="app">
      <h1 className="app__title">Static list of todos</h1>
      <TodoList todoList={preparedTodos} />
    </div>
  );
}

export default App;
