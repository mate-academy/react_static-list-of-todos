import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { ToDo } from './Types/ToDo';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodos: ToDo[] = todos.map((todo) => {
  const user = users.find(({ id }) => id === todo.userId) || null;

  return {
    ...todo,
    user,
  };
});

const App: React.FC = () => (
  <div className="todos">
    <h1 className="todos__title">Todos</h1>
    <ul className="todos__header header">
      <li className="header__item">Name</li>
      <li className="header__item">Email</li>
      <li className="header__item">Mission</li>
      <li className="header__item">Status</li>
    </ul>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
