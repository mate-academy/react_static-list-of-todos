import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './components/Todolist/TodoList';

const preparedTodos = todos.map((todo) => ({
  ...todo,
  user: users.find(user => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="app">
    <div className="app__container">
      <h1 className="app__title">TO DO LIST</h1>
      <TodoList preparedTodos={preparedTodos} />
    </div>
  </div>
);

export default App;
