import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { Todo } from './types/Todo';
import { Todolist } from './components/TodoList';

const preparedTodos: Todo[] = todos.map((todo) => {
  const ownerOfTodo = users.find(user => user.id === todo.userId) || null;

  return {
    ...todo,
    user: ownerOfTodo,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of todos</h1>
    <Todolist todos={preparedTodos} />
  </div>
);

export default App;
