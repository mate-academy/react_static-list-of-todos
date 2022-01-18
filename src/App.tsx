import React from 'react';

import todos from './api/todos';
import users from './api/users';
import { PreparedTodo } from './types/PreparedTodo';
import { TodoList } from './components/TodoList';

import './App.scss';

const preparedTodo: PreparedTodo[] = todos.map(todo => ({
  ...todo,
  user: users.find(user => todo.userId === user.id) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList todos={preparedTodo} />
  </div>
);

export default App;
