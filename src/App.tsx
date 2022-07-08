import React from 'react';

import TodoList from './components/TodoList/TodoList';
import { Todo, PreparedTodo } from './components/types';
import todos from './api/todos';
import users from './api/users';

import './App.scss';

const preparedTodos: PreparedTodo[] = todos.map((todo: Todo) => {
  const selectedUser = users.find(user => user.id === todo.userId);

  return {
    ...todo,
    user: selectedUser || null,
  };
});

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Static list of todos</h1>

      <TodoList preparedTodos={preparedTodos} />
    </div>
  );
};

export default App;
