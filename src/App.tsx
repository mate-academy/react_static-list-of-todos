import React from 'react';
import './App.scss';

import users from './api/users';
import todos from './api/todos';

import { TodoList } from './components/TodoList';
import { PreparedToDo } from './types/PreparedToDo';

const preparedToDos: PreparedToDo[] = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList preparedTodos={preparedToDos} />
  </div>
);

export default App;
