import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { ITodo } from './types/Interface';
import { TodoList } from './components/TodoList/TodoList';

const preparedTodos: Array<ITodo> = todos.map(todo => {
  return { ...todo, user: users.find(user => user.id === todo.userId) || null };
});

export const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todos={preparedTodos} />
    </div>
  );
};
