import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';

import { Todo } from './Types/Todo';
import { TodoList } from './Components/TodoList';

const preparedTodos: Todo[] = todos.map(todo => ({
  ...todo,
  user: users.find(user => todo.userId === user.id) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>

    <TodoList todos={preparedTodos} />

  </div>
);

export default App;
