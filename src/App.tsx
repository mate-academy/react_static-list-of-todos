import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodos: ToDo[] = todos.map(todoItem => ({
  user: users.find(person => person.id === todoItem.userId) || null,
  ...todoItem,
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <main className="content">
      <TodoList todoList={preparedTodos} />
    </main>
  </div>
);

export default App;
