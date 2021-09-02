import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';
import { Todo } from './types/types';

const preparedTodos: Todo[] = todos.map(todo => {
  return ({
    user: users.find(user => user.id === todo.userId) || null,
    title: todo.title,
    completed: todo.completed,
    id: todo.id,
  });
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="title">Static list of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
