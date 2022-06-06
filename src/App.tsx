import React from 'react';
import './App.scss';

import todosFrom from './api/todos';
import usersFrom from './api/users';

import { User, Todo } from './types';

import { TodoList } from './components/TodoList/TodoList';

const prepareTodos = (users: User[], todos: Todo[]) => {
  return todos.map(todo => ({
    ...todo,
    user: users.find(user => user.id === todo.userId || null),

  }));
};

export const preparedTodos = prepareTodos(usersFrom, todosFrom);

const App: React.FC = () => (
  <div className="container">
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
