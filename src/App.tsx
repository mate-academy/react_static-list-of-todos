import React from 'react';
import './App.scss';

import Todos from './api/todos';
import Users from './api/users';
import { TodoList } from './components/TodoList/TodoList';
import { ToDo } from './types/ToDo';

const preparedTodos: ToDo[] = Todos.map((todo) => ({
  ...todo,
  user: Users.find(({ id }) => id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
