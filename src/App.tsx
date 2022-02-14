import React from 'react';
import './App.scss';
import { Todo } from './types/Todo';
import { User } from './types/User';
import { TodoList } from './components/TodoList/TodoList';

import todos from './api/todos';
import users from './api/users';

const preparedTodos = (tasks: Todo[]) => (
  tasks.map(task => ({
    ...task,
    user: users.find((user: User) => user.id === task.userId) || null,
  }))
);

const App: React.FC = () => (
  <div className="App">
    <>
      <h1>Static list of todos</h1>
      <TodoList preparedTodos={preparedTodos(todos)} />
    </>
  </div>
);

export default App;
