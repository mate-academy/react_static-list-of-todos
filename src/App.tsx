import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { Todo } from './types/Todo';
import { Todolist } from './components/TodoList/Todolist';

const preparedTodos: Todo[] = todos.map(todo => {
  const findedUser = users.find(user => todo.userId === user.id) || null;

  return {
    ...todo,
    user: findedUser,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <Todolist TodoList={preparedTodos} />
  </div>
);

export default App;
