import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { Todo } from './types/Todo';
import { TodoList } from './component/TodoList/TodoList';

const preparedTodos: Todo[] = todos.map((todo) => {
  const todoCopy: Todo = todo;
  const userIdFromTodos = todo.userId;
  const userForTodo = users.find(user => user.id === userIdFromTodos);

  todoCopy.user = userForTodo || null;

  return todoCopy;
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <TodoList todos={preparedTodos} />
  </div>
);

export default App;
