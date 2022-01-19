import React from 'react';

import { TodoList } from './components/TodoList/TodoList';
import { TodoWithUsers } from './types/Todo';

import todos from './api/todos';
import users from './api/users';

import './App.scss';

const preparedTodos: TodoWithUsers[] = todos.map(todo => ({
  ...todo,
  user: users.find(user => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Todo List</h1>
    <TodoList todoItems={preparedTodos} />
  </section>
);

export default App;
