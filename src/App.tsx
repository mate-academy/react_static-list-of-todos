import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { Todo } from './types';
import TodoList from './TodoList/TodoList';

const preparedTodos: Array<Todo> = todos.map(todo => {
  return {
    ...todo,
    user: users.find(user => user.id === todo.userId) || null,
  };
});

const App: React.FC = () => {
  return (
    <div className="App">
      <h1 className="title">Static list of todos</h1>
      <TodoList todos={preparedTodos} />
    </div>
  );
};

export default App;
