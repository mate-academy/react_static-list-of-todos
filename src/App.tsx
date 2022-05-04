import React from 'react';
import { TodoList } from './components/TodoList/TodoList';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { Todo } from './types/Todo';

const preparedTodos: Todo[] = todos.map(todo => ({
  ...todo,
  user: users.find((user) => user.id === todo.userId),
}));

const App: React.FC = () => (
  <div className="app">
    <h1 className="app__title">Static list of todos</h1>
    <TodoList props={preparedTodos} />
  </div>
);

export default App;
