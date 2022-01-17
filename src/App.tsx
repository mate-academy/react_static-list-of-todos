import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './Components/TodoList/Todolist';

export const preparedTodos: Todo[] = todos.map((todo) => ({
  ...todo,
  user: users.find(u => u.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList preparedTodos={preparedTodos} />
  </div>
);

export default App;
