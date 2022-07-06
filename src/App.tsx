import React from 'react';
import './App.scss';
import todos from './api/todos';
import users from './api/users';

import { PreparedToDo } from './types/PreparedToDo';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodos: PreparedToDo[] = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <div className="todo">
      <TodoList preparedTodos={preparedTodos} />
    </div>
  </div>
);

export default App;
