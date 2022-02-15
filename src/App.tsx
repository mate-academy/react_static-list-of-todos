import React from 'react';
import './App.scss';

import TodoList from './components/TodoList';

import todos from './api/todos';
import users from './api/users';

import { NewItem } from './components/interface/interface';

type Props = {
  preparedTodos: NewItem[];
};

const preparedTodos = todos.map((item) => {
  const newItem: NewItem = {
    ...item,
    user: users.find((person) => person.id === item.userId) || null,
  };

  return newItem;
}).sort((a, b) => {
  return a.userId - b.userId;
});

const App: React.FC<Props> = () => (
  <TodoList
    preparedTodos={preparedTodos}
  />
);

export default App;
