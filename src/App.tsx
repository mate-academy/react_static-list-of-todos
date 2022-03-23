/* eslint-disable no-console */
import React from 'react';

import todos from './api/todos';
import users from './api/users';
import { Todo } from './types/Todo';

import './App.scss';
import { TodoList } from './components/TodoList/TodoList';

const readyTodos: Todo[] = todos.map(todo => {
  return {
    ...todo,
    user: users.find(user => user.id === todo.userId) || null,
  };
});

console.log(readyTodos);

const App: React.FC = () => (
  <div className="App">
    <TodoList todos={readyTodos} />
  </div>
);

export default App;
