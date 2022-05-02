import React from 'react';

import todos from './api/todos';
import users from './api/users';

import TodoList from './components/TodoList/TodoList';
import { Todo } from './types/Todo';

import './App.scss';

const preparedTodos: Todo[] = todos.map((todo) => ({
  ...todo,
  user: users.find((user) => user.id === todo.userId) || null,
}));

const App: React.FC = () => (
  <div className="todo">
    <h1 className="todo__title">Static list of todos</h1>
    <TodoList
      preparedTodos={preparedTodos}
    />
  </div>
);

export default App;
