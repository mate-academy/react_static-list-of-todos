import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList/TodoList';
import { Todo } from './types/types';

const preparedTodos: Todo[] = [];

todos.forEach(todo => {
  preparedTodos.push({
    user: users.find(userFromArray => userFromArray.id === todo.userId) || null,
  });
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="title">Static list of todos</h1>
    <TodoList todosArray={preparedTodos} />
  </div>
);

export default App;
