import React from 'react';
import './App.scss';
import todos from './api/todos';
import users from './api/users';
import { Todo } from './types/types';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodos: Todo[] = todos.map((todo) => {
  const user = users.find((person) => (person.id === todo.userId)) || null;

  return { user, ...todo };
});

export const App: React.FC = () => (
  <div className="app">
    <TodoList todos={preparedTodos} />
  </div>
);
