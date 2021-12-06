import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { TodoList } from './components/TodoList/TodoList';

const preparedTodos = todos.map(todo => {
  return {
    ...todo,
    user: users.find(user => user.id === todo.userId) || null,
  };
});

const App: React.FC = () => (
  <div className="app">
    <div className="app__container">
      <h1 className="app__title">TO-DO</h1>
      <TodoList preparedTodos={preparedTodos} />
    </div>
  </div>
);

export default App;
